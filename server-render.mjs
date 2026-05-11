import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

import worker from "./dist/server/index.js";

const PORT = Number(process.env.PORT || 3000);
const HOST = "0.0.0.0";
const CLIENT_DIR = join(process.cwd(), "dist/client");

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function sanitizePath(pathname) {
  const normalized = normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, "");
  return normalized.startsWith("/") ? normalized.slice(1) : normalized;
}

async function tryServeStatic(pathname) {
  const safePath = sanitizePath(pathname);
  if (!safePath || safePath.endsWith("/")) {
    return null;
  }

  const filePath = join(CLIENT_DIR, safePath);
  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) return null;

    const body = await readFile(filePath);
    const ext = extname(filePath).toLowerCase();
    return new Response(body, {
      status: 200,
      headers: {
        "content-type": MIME_TYPES[ext] || "application/octet-stream",
        "cache-control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return null;
  }
}

function toFetchRequest(req) {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host || `localhost:${PORT}`;
  const url = new URL(req.url || "/", `${protocol}://${host}`);

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      for (const item of value) headers.append(key, item);
    } else if (value != null) {
      headers.set(key, value);
    }
  }

  const bodyAllowed = req.method !== "GET" && req.method !== "HEAD";
  return new Request(url, {
    method: req.method,
    headers,
    body: bodyAllowed ? req : undefined,
    duplex: bodyAllowed ? "half" : undefined,
  });
}

async function sendNodeResponse(nodeRes, response) {
  nodeRes.statusCode = response.status;
  response.headers.forEach((value, key) => {
    nodeRes.setHeader(key, value);
  });

  if (!response.body) {
    nodeRes.end();
    return;
  }

  const arrayBuffer = await response.arrayBuffer();
  nodeRes.end(Buffer.from(arrayBuffer));
}

createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host || `localhost:${PORT}`}`);
    const staticResponse = await tryServeStatic(url.pathname);
    if (staticResponse) {
      await sendNodeResponse(res, staticResponse);
      return;
    }

    const request = toFetchRequest(req);
    const response = await worker.fetch(request, {}, { waitUntil() {} });
    await sendNodeResponse(res, response);
  } catch (error) {
    console.error("Render server error:", error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }
}).listen(PORT, HOST, () => {
  console.log(`Render server listening on http://${HOST}:${PORT}`);
});

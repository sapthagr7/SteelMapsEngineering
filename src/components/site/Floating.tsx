import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";

export function Floating() {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 inset-x-0 h-[2px] bg-[var(--gradient-electric)] origin-left z-[60]"
      />

      {/* Floating WhatsApp */}
      <a
        href="#"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground grid place-items-center glow-electric-lg hover:scale-110 transition-transform animate-pulse-glow"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {show && (
        <a
          href="#top"
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-50 h-11 w-11 rounded-full glass-strong grid place-items-center hover:text-primary transition-colors"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      )}
    </>
  );
}

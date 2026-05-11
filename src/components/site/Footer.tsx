import { Linkedin, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border/60 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Steelmaps Engineering" className="h-9 w-9 object-contain" />
              <div>
                <div className="text-sm font-semibold tracking-tight">STEELMAPS</div>
                <div className="text-[10px] text-mono uppercase text-muted-foreground">Engineering</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mb-6">
              SDS2 & Tekla driven structural steel detailing for fabricators,
              contractors and construction firms across 27 countries.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> 3210 Industrial Pkwy, Houston TX</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +1 (832) 555-0142</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@steelmaps.co</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-lg font-semibold mb-4">Send a project brief</h3>
            <form className="grid sm:grid-cols-2 gap-3">
              <input placeholder="Name" className="bg-secondary/60 rounded-xl px-4 py-3 text-sm border border-border focus:border-primary focus:outline-none" />
              <input placeholder="Company" className="bg-secondary/60 rounded-xl px-4 py-3 text-sm border border-border focus:border-primary focus:outline-none" />
              <input placeholder="Email" type="email" className="bg-secondary/60 rounded-xl px-4 py-3 text-sm border border-border focus:border-primary focus:outline-none" />
              <input placeholder="Tonnage / scope" className="bg-secondary/60 rounded-xl px-4 py-3 text-sm border border-border focus:border-primary focus:outline-none" />
              <textarea placeholder="Tell us about the project" rows={3} className="sm:col-span-2 bg-secondary/60 rounded-xl px-4 py-3 text-sm border border-border focus:border-primary focus:outline-none" />
              <button className="sm:col-span-2 rounded-xl bg-primary text-primary-foreground py-3 text-sm font-semibold hover:scale-[1.01] transition-transform glow-electric">
                Request Quote
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-border/60">
          <div className="text-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Steelmaps Engineering · All rights reserved
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="h-9 w-9 rounded-full glass grid place-items-center hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="h-9 w-9 rounded-full glass grid place-items-center hover:text-primary transition-colors" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="#" className="h-9 w-9 rounded-full glass grid place-items-center hover:text-primary transition-colors" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

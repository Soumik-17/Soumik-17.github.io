import { Mail, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { links, profile } from "@/config/site";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Contact() {
  const options = [
    { Icon: Mail, label: "Email Me", value: links.email, href: `mailto:${links.email}` },
    { Icon: MessageCircle, label: "WhatsApp", value: links.whatsapp, href: `https://wa.me/${links.whatsapp.replace(/\D/g, "")}` },
    { Icon: Phone, label: "Call Me", value: links.phone, href: `tel:${links.phone.replace(/[^\d+]/g, "")}` },
  ];
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Let's Connect</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Have an opportunity, a project idea, or just want to connect? Feel free to reach out.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {options.map(({ Icon, label, value, href }) => (
            <a key={label} href={href} target={label === "WhatsApp" ? "_blank" : undefined} rel="noreferrer"
              className="group relative rounded-2xl border border-border bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
              <span className="inline-flex rounded-xl bg-accent p-3 text-primary"><Icon className="h-5 w-5" /></span>
              <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              <p className="mt-5 font-semibold">{label}</p>
              <p className="mt-1 truncate font-mono text-xs text-muted-foreground">{value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <p className="font-display font-semibold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.footerTagline}</p>
        </div>
        <div className="flex items-center gap-2">
          {[{ l: "GitHub", h: links.github, I: GithubIcon }, { l: "LinkedIn", h: links.linkedin, I: LinkedinIcon }, { l: "Email", h: `mailto:${links.email}`, I: Mail }].map(({ l, h, I }) => (
            <a key={l} href={h} aria-label={l} target="_blank" rel="noreferrer"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:text-primary"><I className="h-4 w-4" /></a>
          ))}
        </div>
        <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}

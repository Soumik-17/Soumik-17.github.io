import { useState } from "react";
import { Mail, Menu, X, FileText } from "lucide-react";
import { links, profile, isPlaceholder } from "@/config/site";
import { GithubIcon, LinkedinIcon } from "./Icons";

const ext = (url: string) => (isPlaceholder(url) ? "#" : url);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const icons = [
    { label: "GitHub", href: ext(links.github), Icon: GithubIcon },
    { label: "LinkedIn", href: ext(links.linkedin), Icon: LinkedinIcon },
    { label: "Email", href: `mailto:${links.email}`, Icon: Mail },
  ];
  const navItems = [
    { label: "Skills", href: "#skills" },
    { label: "My Work", href: "#work" },
    { label: "Contact Me", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          <span className="text-gradient">{profile.initials}</span>
          <span className="ml-2 hidden text-sm font-medium text-muted-foreground sm:inline">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {icons.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary">
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
          <span className="mx-2 h-5 w-px bg-border" />
          <a href={ext(links.resume)} target="_blank" rel="noreferrer"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            Resume
          </a>
          {navItems.map((n) => (
            <a key={n.href} href={n.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu"
          className="rounded-md p-2 text-foreground md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-accent">{n.label}</a>
            ))}
            <a href={ext(links.resume)} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground hover:bg-accent">
              <FileText className="h-4 w-4" /> Resume
            </a>
            <div className="mt-2 flex gap-2 px-1">
              {icons.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="rounded-md border border-border p-2.5 text-muted-foreground hover:text-primary">
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

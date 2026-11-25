import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Clock } from "lucide-react";
import { projects, isPlaceholder, type Project } from "@/config/site";
import { GithubIcon } from "./Icons";

function PreviewPlaceholder({ label }: { label: string }) {
  const bars = [40, 65, 50, 80, 58, 92, 70];
  return (
    <div className="relative flex h-full w-full flex-col justify-between bg-secondary p-5">
      <div className="flex gap-1.5">
        {[0, 1, 2].map((d) => <span key={d} className="h-2 w-2 rounded-full bg-border" />)}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((k) => (
          <div key={k} className="rounded-md border border-border bg-card/60 p-2">
            <div className="h-1.5 w-8 rounded bg-muted-foreground/30" />
            <div className="mt-2 h-3 w-12 rounded bg-primary/40" />
          </div>
        ))}
      </div>
      <div className="flex h-20 items-end gap-2">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-gradient-primary opacity-60" style={{ height: `${h}%` }} />
        ))}
      </div>
      <span className="absolute right-3 top-3 font-mono text-[10px] text-muted-foreground">{label}</span>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const liveReady = !isPlaceholder(p.liveUrl);
  const ghReady = p.githubUrl && !isPlaceholder(p.githubUrl);
  return (
    <article className="group flex w-[86vw] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow sm:w-[520px]">
      <div className="aspect-[16/9] overflow-hidden border-b border-border">
        {isPlaceholder(p.image) ? (
          <PreviewPlaceholder label={p.image} />
        ) : (
          <img src={p.image} alt={`${p.title} preview`} loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="w-fit rounded-full border border-primary/30 bg-accent px-3 py-1 font-mono text-[11px] text-accent-foreground">
          {p.category}
        </span>
        <h3 className="mt-4 text-xl font-semibold leading-snug">{p.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span key={t} className="rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground">{t}</span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          {liveReady && (
             <a
               href={p.liveUrl}
               target="_blank"
               rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
              View Live Project <ExternalLink className="h-3.5 w-3.5" />
              </a>
)}
          {p.githubUrl !== undefined && (ghReady ? (
            <a href={p.githubUrl} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
              <GithubIcon className="h-4 w-4" /> GitHub Repository
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/60">
              <GithubIcon className="h-4 w-4" /> Repo coming soon
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = () => {
    const el = ref.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  };
  useEffect(update, []);

  const scroll = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("article");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 500) + 24), behavior: "smooth" });
  };

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Projects</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">My Work</h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Exploring data, building models, and creating meaningful solutions.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground">{projects.length} projects</span>
            {[{ d: -1, I: ArrowLeft, dis: edge.start, l: "Previous" }, { d: 1, I: ArrowRight, dis: edge.end, l: "Next" }].map(({ d, I, dis, l }) => (
              <button key={l} onClick={() => scroll(d)} disabled={dis} aria-label={`${l} project`}
                className="rounded-full border border-border p-3 text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground">
                <I className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-12">
        <div ref={ref} onScroll={update}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-6 md:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
          <div className="w-1 shrink-0" />
        </div>
        {!edge.end && (
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        )}
      </div>
    </section>
  );
}

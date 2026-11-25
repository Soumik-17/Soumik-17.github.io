import { skillGroups } from "@/config/site";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Toolkit</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Skills</h2>
        <p className="mt-3 max-w-lg text-muted-foreground">Tools and technologies I work with.</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <h3 className="text-base font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { CSSProperties } from "react";
import { ArrowDown } from "lucide-react";
import { floatingSkills, profile } from "@/config/site";

const anims = ["float-x", "float-y", "float-d", "float-d2"];
// Deterministic layout so SSR and client match.
const positions = [
  [8, 14], [72, 10], [55, 26], [85, 38], [14, 72], [40, 82], [68, 66], [90, 82],
  [30, 18], [78, 52], [5, 45], [60, 90], [22, 55], [48, 8], [92, 22], [35, 65],
];
const sizes = ["text-sm", "text-base", "text-lg", "text-2xl", "text-3xl", "text-xl"];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden bg-hero pt-16">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />

      {/* Floating skills — decorative, behind content */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 select-none">
        {floatingSkills.map((skill, i) => {
          const [left, top] = positions[i % positions.length] ?? [0, 0];
          const glow = i % 4 === 0;
          const blur = i % 5 === 2;
          const style: CSSProperties = {
            left: `${left}%`,
            top: `${top}%`,
            animationName: anims[i % anims.length],
            animationDuration: `${18 + ((i * 7) % 20)}s`,
            animationDelay: `-${(i * 3) % 15}s`,
            opacity: glow ? 0.55 : blur ? 0.18 : 0.28 + ((i * 13) % 20) / 100,
          };
          return (
            <span key={skill} style={style}
              className={[
                "skill-float absolute whitespace-nowrap font-mono font-medium",
                sizes[i % sizes.length],
                glow ? "text-primary glow-text" : i % 3 === 0 ? "text-primary-glow" : "text-muted-foreground",
                blur ? "blur-[2px]" : "",
                i >= 9 ? "hidden md:block" : "",
              ].join(" ")}>
              {skill}
            </span>
          );
        })}
      </div>
      {/* Readability veil behind text */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-full bg-gradient-to-r from-background/90 via-background/50 to-transparent md:w-2/3" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="font-mono text-sm text-primary">
            {profile.greeting} <span className="text-foreground">{profile.name}</span>.
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Building <span className="text-gradient">Insights</span>, Intelligent Models & Data Solutions.
          </h1>
          <p className="mt-5 font-mono text-xs tracking-wide text-muted-foreground sm:text-sm">
            {profile.subtitle}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.intro}
          </p>
          <a href="#work"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
            Explore My Work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

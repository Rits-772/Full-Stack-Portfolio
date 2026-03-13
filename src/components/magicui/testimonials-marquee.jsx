import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";

const reviews = [
  {
    name: "Alex",
    username: "@alex_web",
    body: "The attention to detail in his projects is outstanding. Truly a masterclass in frontend architecture.",
    img: "https://ui-avatars.com/api/?name=Alex&background=10B981&color=fff",
  },
  {
    name: "Sarah",
    username: "@sarah_designs",
    body: "Ritvik transformed our vague ideas into a cohesive, beautiful web application.",
    img: "https://ui-avatars.com/api/?name=Sarah&background=34D399&color=fff",
  },
  {
    name: "Michael",
    username: "@mike_tech",
    body: "A reliable backend developer who writes clean, scalable code. Highly recommended.",
    img: "https://ui-avatars.com/api/?name=Michael&background=059669&color=fff",
  },
  {
    name: "Jessica",
    username: "@jess_dev",
    body: "The AI integrations in his recent projects are mind-blowing. Top tier engineering.",
    img: "https://ui-avatars.com/api/?name=Jessica&background=10B981&color=fff",
  },
  {
    name: "David",
    username: "@david_ceo",
    body: "Working with Ritvik was seamless. He delivered our product ahead of schedule with zero bugs.",
    img: "https://ui-avatars.com/api/?name=David&background=6ee7b7&color=fff",
  },
  {
    name: "Elena",
    username: "@elena_pm",
    body: "He communicates clearly and delivers exactly what is needed. A rare blend of tech and soft skills.",
    img: "https://ui-avatars.com/api/?name=Elena&background=059669&color=fff",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-[1.5rem] border p-4",
        "border-glass-border bg-glass-bg/50 hover:bg-glass-bg backdrop-blur-md shadow-premium transition-colors"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold text-text-page">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-emerald-accent">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm text-slate-muted font-medium">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 fade-edges">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s] mt-4">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* Gradients for fade effect are handled in CSS or via absolute divs */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-bg-page/80 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-bg-page/80 to-transparent"></div>
    </div>
  );
}

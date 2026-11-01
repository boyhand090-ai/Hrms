import { useState, useRef, useEffect, useCallback } from "react";
import { portfolioFilters, projects, type Project } from "@/data/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/**
 * Authentic brand tool badges matching the six2eight.com reference design.
 * Rendered inside crisp white/brand squircle containers at the bottom left of cards.
 */
function ToolBadge({ tool }: { tool: string }) {
  const t = tool.toLowerCase();

  if (t === "figma") {
    return (
      <div
        title="Figma"
        className="size-7 sm:size-8 rounded-lg bg-white shadow-sm p-1.5 flex items-center justify-center shrink-0 backdrop-blur-xs transition-transform duration-300 hover:scale-110"
      >
        <svg className="size-full" viewBox="0 0 38 57" fill="none">
          <path
            d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
            fill="#1ABCFE"
          />
          <path
            d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
            fill="#0ACF83"
          />
          <path
            d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
            fill="#FF7262"
          />
          <path
            d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
            fill="#F24E1E"
          />
          <path
            d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
            fill="#A259FF"
          />
        </svg>
      </div>
    );
  }

  if (t === "webflow") {
    return (
      <div
        title="Webflow"
        className="size-7 sm:size-8 rounded-lg bg-[#146EF5] shadow-sm p-1.5 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110"
      >
        <svg className="size-full" viewBox="0 0 100 100" fill="white">
          <path d="M100 32.227l-15.01 47.935H58.629l10.598-33.826-17.151 33.826H30.144L4.814 32.227h27.054l10.63 33.649 16.758-33.649H77.92l-9.82 32.26 10.835-32.26H100z" />
        </svg>
      </div>
    );
  }

  if (t === "wordpress") {
    return (
      <div
        title="WordPress"
        className="size-7 sm:size-8 rounded-lg bg-white shadow-sm p-1.5 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110"
      >
        <svg className="size-full" viewBox="0 0 100 100" fill="#21759B">
          <path d="M50 0C22.386 0 0 22.386 0 50s22.386 50 50 50 50-22.386 50-50S77.614 0 50 0zm0 9.091c22.592 0 40.909 18.317 40.909 40.909 0 7.983-2.308 15.426-6.279 21.729L57.25 17.587c.042-.042.092-.067.138-.1 1.517-.721 3.083-1.208 4.696-1.471l-.017-1.333H46.083l.017 1.333c1.717.279 3.375.846 4.917 1.692l11.833 33.175-8 23.971-13.375-39.767c1.721-.292 3.375-.854 4.925-1.7l.013-1.333H30.438l.013 1.333c1.75.283 3.438.875 5.004 1.75l14.313 40.729-9.25 27.679C17.479 80.6 9.091 66.283 9.091 50c0-22.592 18.317-40.909 40.909-40.909z" />
        </svg>
      </div>
    );
  }

  if (t === "shopify") {
    return (
      <div
        title="Shopify"
        className="size-7 sm:size-8 rounded-lg bg-white shadow-sm p-1.5 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110"
      >
        <svg className="size-full" viewBox="0 0 109 124" fill="none">
          <path
            d="M74.9 14.1c-.3-2.3-2.4-3.7-4.4-3.6-2 .1-13.3 1.2-13.3 1.2s-8.9-8.8-9.9-9.8c-1-1-3-1.5-4.7-1-1.6.4-8.8 2.7-8.8 2.7s-3.7-1.7-5.9-1.7c-5.9 0-10.7 4.7-10.7 10.7 0 2.2.6 4.3 1.8 6.1L4.6 24.3c-2.4.7-4 2.9-3.9 5.4l5.3 75.8c.2 2.6 2 4.7 4.6 5.1l43.7 7.7c.6.1 1.2.1 1.8.1.9 0 1.9-.3 2.7-.8l45.4-23.7c2.2-1.2 3.5-3.5 3.3-6L102.3 22c-.2-2.8-2.5-4.8-5.3-4.5l-22.1-3.4z"
            fill="#95BF47"
          />
          <path
            d="M60.1 36.6l-8.6 2.8s-3.2-6.5-7.3-8.8c-4.1-2.4-9.3-1.6-11.8.8-2.6 2.4-3.1 6.5-1.3 9.5 1.8 3 5.4 6.8 14.1 11.2 12.3 6.3 19.3 15.3 17.5 25.4-1.9 10.9-11.2 16.7-21.6 15.6-12.7-1.4-18.4-11.1-18.4-11.1l7.6-4.6s3.8 6.6 8.8 8.1c5 1.5 11.3-.2 12.5-6.8 1.4-7.5-5.3-12.8-13.5-17.1-11.8-6.1-17.7-14.2-15.5-23.5 2.1-9.3 11-14.7 20.3-13.4 9.4 1.3 15.6 9 15.6 9l1.6 2.9z"
            fill="#fff"
          />
        </svg>
      </div>
    );
  }

  // Default / React
  return (
    <div
      title={tool}
      className="size-7 sm:size-8 rounded-lg bg-white shadow-sm p-1.5 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110"
    >
      <svg className="size-full" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.8" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#00D8FF"
          strokeWidth="1.8"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#00D8FF"
          strokeWidth="1.8"
          transform="rotate(120 12 12)"
        />
        <circle cx="12" cy="12" r="1.8" fill="#00D8FF" />
      </svg>
    </div>
  );
}

function ProjectCard({
  p,
  isTall = false,
  className,
}: {
  p: Project;
  isTall?: boolean;
  className?: string;
}) {
  const tools = p.tools && p.tools.length > 0 ? p.tools : ["Figma", "Webflow"];
  // For tall/flagship card show 2 clean badges; for smaller cards keep it focused
  const tags = isTall ? (p.categories || []).slice(0, 2) : (p.categories || []).slice(0, 1);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[24px] sm:rounded-[30px] bg-neutral-900 shadow-md transition-all duration-500 select-none",
        className,
      )}
    >
      {/* Real Project Image with smooth subtle hover zoom */}
      <img
        src={p.image}
        alt={`${p.name} — ${p.categories.join(", ")} project`}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none z-0"
      />

      {/* Top badges (2-3 clean tags only if ample room, no arrow circle) */}
      {tags.length > 0 && (
        <div className="absolute inset-x-0 top-0 p-5 sm:p-6 flex items-center justify-between z-2 pointer-events-none">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] sm:text-xs font-semibold text-white tracking-wide shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Deep gradient wash for crisp, guaranteed text legibility without overlapping */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-45% to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-100 z-1" />

      {/* Bottom overlay content: Tool logos followed by Project title & description */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7 z-2 pointer-events-none">
        <div className="flex flex-col items-start gap-2.5 sm:gap-3">
          {/* Authentic tool badges (Figma, Webflow, WordPress) */}
          <div className="flex items-center gap-2 pointer-events-auto">
            {tools.slice(0, 2).map((t) => (
              <ToolBadge key={t} tool={t} />
            ))}
          </div>

          {/* Project Title */}
          <h3
            className={cn(
              "font-bold tracking-tight text-white leading-tight drop-shadow-sm",
              isTall ? "text-2xl sm:text-3xl lg:text-[30px]" : "text-xl sm:text-2xl lg:text-[23px]",
            )}
          >
            {p.name}
          </h3>

          {/* Project Description with generous line-height to prevent overlap */}
          {p.copy && (
            <p
              className={cn(
                "leading-relaxed text-neutral-200/95 font-normal drop-shadow-xs",
                isTall
                  ? "text-xs sm:text-sm lg:text-[14px] max-w-lg line-clamp-3"
                  : "text-xs sm:text-[13px] max-w-md line-clamp-2",
              )}
            >
              {p.copy}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export function Portfolio() {
  const [active, setActive] = useState("All");
  const trackRef = useRef<HTMLDivElement>(null);

  // Dragging and inertia refs for mobile swipe
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const isDraggingRef = useRef(false);
  const animationFrameIdRef = useRef<number | null>(null);

  const [isCursorGrabbing, setIsCursorGrabbing] = useState(false);

  const visible =
    active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  // Exactly 4 projects displayed like in the reference screenshot
  const displayProjects = visible.slice(0, 4);

  const handleFilterChange = (f: string) => {
    setActive(f);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  // Inertia momentum decay for mobile/touch swipe
  const startMomentumDecay = useCallback(() => {
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
    }

    const decay = () => {
      if (!trackRef.current) return;
      velocityRef.current *= 0.94;

      if (Math.abs(velocityRef.current) > 0.4) {
        trackRef.current.scrollLeft -= velocityRef.current;
        animationFrameIdRef.current = requestAnimationFrame(decay);
      } else {
        velocityRef.current = 0;
        animationFrameIdRef.current = null;
      }
    };

    animationFrameIdRef.current = requestAnimationFrame(decay);
  }, []);

  useEffect(() => {
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // Mouse drag handlers for mobile/responsive carousel
  const handleMouseDown = (e: React.MouseEvent) => {
    if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
    if (!trackRef.current) return;

    isDownRef.current = true;
    isDraggingRef.current = false;
    startXRef.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftRef.current = trackRef.current.scrollLeft;
    lastXRef.current = e.pageX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    setIsCursorGrabbing(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDownRef.current || !trackRef.current) return;
    e.preventDefault();

    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 4) {
      isDraggingRef.current = true;
    }

    const now = performance.now();
    const dt = Math.max(now - lastTimeRef.current, 1);
    const stepDiff = e.pageX - lastXRef.current;
    velocityRef.current = (stepDiff / dt) * 16;
    lastXRef.current = e.pageX;
    lastTimeRef.current = now;

    trackRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDownRef.current) return;
    isDownRef.current = false;
    setIsCursorGrabbing(false);

    if (Math.abs(velocityRef.current) > 1) {
      startMomentumDecay();
    }
  };

  // Mobile Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
    if (!trackRef.current) return;

    isDownRef.current = true;
    isDraggingRef.current = false;
    const touch = e.touches[0];
    if (touch) {
      startXRef.current = touch.pageX - trackRef.current.offsetLeft;
      scrollLeftRef.current = trackRef.current.scrollLeft;
      lastXRef.current = touch.pageX;
      lastTimeRef.current = performance.now();
      velocityRef.current = 0;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDownRef.current || !trackRef.current) return;
    const touch = e.touches[0];
    if (!touch) return;

    const x = touch.pageX - trackRef.current.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 4) {
      isDraggingRef.current = true;
    }

    const now = performance.now();
    const dt = Math.max(now - lastTimeRef.current, 1);
    const stepDiff = touch.pageX - lastXRef.current;
    velocityRef.current = (stepDiff / dt) * 16;
    lastXRef.current = touch.pageX;
    lastTimeRef.current = now;

    trackRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleTouchEnd = () => {
    if (!isDownRef.current) return;
    isDownRef.current = false;
    if (Math.abs(velocityRef.current) > 1) {
      startMomentumDecay();
    }
  };

  return (
    <section id="work" className="relative bg-white py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Heading matching screenshot */}
        <Reveal variant="blur" className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-neutral-900 leading-tight">
            Our portfolio
          </h2>
        </Reveal>

        {/* Filter Pills matching reference screenshot */}
        <Reveal
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          delay={60}
        >
          {portfolioFilters.map((f) => {
            const isSelected = active === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => handleFilterChange(f)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm sm:text-[15px] transition-all duration-200 cursor-pointer select-none",
                  isSelected
                    ? "bg-[#2bee18] text-black font-semibold shadow-xs"
                    : "bg-white text-neutral-800 border border-neutral-300 hover:border-neutral-900 hover:text-black font-medium",
                )}
              >
                {f}
              </button>
            );
          })}
        </Reveal>

        {/* Desktop Bento Grid: Exactly 4 projects matching the reference screenshot */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-5 lg:gap-6 mt-12 sm:mt-14">
          {/* Left Column: 1 Tall Flagship Card */}
          {displayProjects[0] && (
            <div className="lg:col-span-6 h-[660px]">
              <ProjectCard p={displayProjects[0]} isTall className="h-full w-full" />
            </div>
          )}

          {/* Right Column: 1 Wide Top Card + 2 Square-ish Bottom Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5 lg:gap-6 h-[660px]">
            {displayProjects[1] && (
              <div className="h-[318px] w-full">
                <ProjectCard p={displayProjects[1]} className="h-full w-full" />
              </div>
            )}
            <div className="grid grid-cols-2 gap-5 lg:gap-6 flex-1 h-[318px]">
              {displayProjects[2] && (
                <ProjectCard p={displayProjects[2]} className="h-full w-full" />
              )}
              {displayProjects[3] && (
                <ProjectCard p={displayProjects[3]} className="h-full w-full" />
              )}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Swipeable Carousel Track: Responsive horizontal swipe with touch and mouse drag */}
        <div className="lg:hidden relative mt-10 -mx-5 sm:-mx-8">
          <div
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={cn(
              "flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-5 sm:px-8 py-2",
              isCursorGrabbing ? "cursor-grabbing" : "cursor-grab",
            )}
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {displayProjects.map((p, idx) => (
              <div
                key={p.name}
                className="w-[84vw] max-w-[340px] sm:max-w-[400px] h-[500px] sm:h-[540px] shrink-0 snap-start"
              >
                <ProjectCard p={p} isTall={idx === 0} className="h-full w-full" />
              </div>
            ))}
            <div className="w-4 shrink-0" aria-hidden="true" />
          </div>
        </div>

        {displayProjects.length === 0 && (
          <p className="mt-16 text-center text-neutral-500 text-base">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}

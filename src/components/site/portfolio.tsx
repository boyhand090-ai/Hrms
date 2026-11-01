import { useState, useRef, useEffect, useCallback } from "react";
import { portfolioFilters, projects, type Project } from "@/data/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Authentic brand tool badges matching the six2eight.com reference design.
 * Rendered inside crisp white rounded squircle containers at the bottom left of cards.
 */
function ToolBadge({ tool }: { tool: string }) {
  const t = tool.toLowerCase();

  if (t === "figma") {
    return (
      <div
        title="Figma"
        className="size-7 sm:size-8 rounded-lg bg-white/95 shadow-md p-1.5 flex items-center justify-center shrink-0 backdrop-blur-xs transition-transform duration-300 hover:scale-110"
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
        className="size-7 sm:size-8 rounded-lg bg-white/95 shadow-md p-1.5 flex items-center justify-center shrink-0 backdrop-blur-xs transition-transform duration-300 hover:scale-110"
      >
        <svg className="size-full" viewBox="0 0 24 24" fill="#146EF5">
          <path d="M16.48 7.37L12.9 14.7l-2.47-5.07h-3.6l4.28 8.81L7.54 24h3.61l2.48-5.11 2.48 5.11h3.6l-3.58-5.56 4.31-8.81h-3.96z" />
        </svg>
      </div>
    );
  }

  if (t === "wordpress") {
    return (
      <div
        title="WordPress"
        className="size-7 sm:size-8 rounded-lg bg-white/95 shadow-md p-1.5 flex items-center justify-center shrink-0 backdrop-blur-xs transition-transform duration-300 hover:scale-110"
      >
        <svg className="size-full" viewBox="0 0 24 24" fill="#21759B">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.422 0 9.818 4.396 9.818 9.818 0 1.916-.554 3.702-1.507 5.215l-4.48-12.986c.01-.01.022-.016.033-.024.364-.173.74-.29 1.127-.353l-.004-.32h-3.834l.004.32c.412.067.81.203 1.18.406l2.84 7.962-1.92 5.753-3.21-9.544c.413-.07.81-.205 1.182-.408l.003-.32h-3.832l.003.32c.42.068.825.21 1.201.42l3.435 9.775-2.22 6.643C4.195 19.344 2.182 15.908 2.182 12c0-5.422 4.396-9.818 9.818-9.818z" />
        </svg>
      </div>
    );
  }

  if (t === "shopify") {
    return (
      <div
        title="Shopify"
        className="size-7 sm:size-8 rounded-lg bg-white/95 shadow-md p-1.5 flex items-center justify-center shrink-0 backdrop-blur-xs transition-transform duration-300 hover:scale-110"
      >
        <svg className="size-full" viewBox="0 0 24 24" fill="#95BF47">
          <path d="M19.35 6.72c-.08-.54-.57-.86-1.04-.84-.46.02-3.1.28-3.1.28s-2.07-2.06-2.31-2.3c-.24-.24-.71-.34-1.09-.23-.1.03-.64.21-1.46.48-.87-.72-1.97-1.11-3.18-1.11-.27 0-.54.02-.8.06-2.39.4-3.79 2.5-3.12 5.05.51 1.94 1.76 4.14 2.8 5.61l-1.97 9.87 9.4 1.94 6.73-1.63-1.86-17.17zm-6.19 1.28l-2.02.66c-.05-.33-.14-.65-.25-.97.77-.25 1.5-.49 2.27-.74.04.35.03.71 0 1.05z" />
        </svg>
      </div>
    );
  }

  // Default / React
  return (
    <div
      title={tool}
      className="size-7 sm:size-8 rounded-lg bg-white/95 shadow-md p-1.5 flex items-center justify-center shrink-0 backdrop-blur-xs transition-transform duration-300 hover:scale-110"
    >
      <svg className="size-full" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.6" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#00D8FF"
          strokeWidth="1.6"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#00D8FF"
          strokeWidth="1.6"
          transform="rotate(120 12 12)"
        />
        <circle cx="12" cy="12" r="1.5" fill="#00D8FF" />
      </svg>
    </div>
  );
}

function ProjectCard({ p, className }: { p: Project; className?: string }) {
  const tools = p.tools && p.tools.length > 0 ? p.tools : ["Figma", "Webflow"];
  // Select up to 2-3 clean relevant category tags for display
  const tags = (p.categories || []).slice(0, 2);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[26px] sm:rounded-[32px] bg-neutral-900 shadow-md transition-all duration-500 select-none",
        className,
      )}
    >
      {/* Real Project Image with smooth scale */}
      <img
        src={p.image}
        alt={`${p.name} — ${p.categories.join(", ")} project`}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none z-0"
      />

      {/* Top badges (2-3 clean tags if card has ample room, no arrow circle) */}
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

      {/* Deep gradient wash for crisp, guaranteed text legibility without overlapping */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-45% to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-100 z-1" />

      {/* Bottom overlay content: Tool logos followed by Project title & description */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-8 z-2 pointer-events-none">
        <div className="flex flex-col items-start gap-3">
          {/* Authentic tool badges (Figma, Webflow, etc.) */}
          <div className="flex items-center gap-2 pointer-events-auto">
            {tools.slice(0, 2).map((t) => (
              <ToolBadge key={t} tool={t} />
            ))}
          </div>

          {/* Project Title */}
          <h3 className="text-2xl sm:text-[27px] lg:text-[29px] font-bold tracking-tight text-white leading-tight drop-shadow-sm">
            {p.name}
          </h3>

          {/* Project Description with generous line-height to prevent overlap */}
          {p.copy && (
            <p className="text-xs sm:text-[14px] leading-relaxed text-neutral-200/95 max-w-md drop-shadow-xs font-normal">
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

  // Dragging and inertia refs
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const isDraggingRef = useRef(false);
  const animationFrameIdRef = useRef<number | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isCursorGrabbing, setIsCursorGrabbing] = useState(false);

  const visible =
    active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  // Check scroll position for arrow buttons & progress
  const updateScrollState = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [updateScrollState, visible]);

  // Reset scroll on filter change
  const handleFilterChange = (filter: string) => {
    setActive(filter);
    if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  // Button scroll triggers
  const scrollByAmount = (amount: number) => {
    if (!trackRef.current) return;
    if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
    trackRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  // Inertia momentum decay loop
  const startMomentumDecay = () => {
    if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);

    const decay = () => {
      if (!trackRef.current) return;
      if (Math.abs(velocityRef.current) < 0.25) {
        velocityRef.current = 0;
        return;
      }
      trackRef.current.scrollLeft -= velocityRef.current;
      velocityRef.current *= 0.94; // friction
      animationFrameIdRef.current = requestAnimationFrame(decay);
    };

    animationFrameIdRef.current = requestAnimationFrame(decay);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);

    isDownRef.current = true;
    isDraggingRef.current = false;
    setIsCursorGrabbing(true);

    const now = performance.now();
    startXRef.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftRef.current = trackRef.current.scrollLeft;
    lastXRef.current = e.pageX;
    lastTimeRef.current = now;
    velocityRef.current = 0;
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

        {/* Header Controls: Drag/Swipe Hint and Left/Right Navigation Buttons */}
        <div className="mt-10 sm:mt-12 flex items-center justify-between border-b border-neutral-200/80 pb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 font-medium select-none">
            <span className="size-2 rounded-full bg-[#2bee18] animate-pulse" />
            <span>Drag with cursor or swipe on mobile to view projects</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByAmount(-480)}
              disabled={!canScrollLeft}
              aria-label="Previous projects"
              className={cn(
                "size-10 sm:size-11 rounded-full border border-neutral-300 flex items-center justify-center transition-all duration-200",
                canScrollLeft
                  ? "bg-white text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 cursor-pointer shadow-xs active:scale-95"
                  : "bg-neutral-100 text-neutral-400 border-neutral-200 cursor-not-allowed opacity-50",
              )}
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount(480)}
              disabled={!canScrollRight}
              aria-label="Next projects"
              className={cn(
                "size-10 sm:size-11 rounded-full border border-neutral-300 flex items-center justify-center transition-all duration-200",
                canScrollRight
                  ? "bg-white text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 cursor-pointer shadow-xs active:scale-95"
                  : "bg-neutral-100 text-neutral-400 border-neutral-200 cursor-not-allowed opacity-50",
              )}
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-width Horizontal Swipeable/Draggable Carousel Track */}
      <div className="relative mt-8 sm:mt-10 w-full">
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
            "flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth px-5 sm:px-8 lg:px-12 py-3",
            isCursorGrabbing ? "cursor-grabbing" : "cursor-grab",
          )}
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {visible.map((p) => (
            <div
              key={p.name}
              className="w-[84vw] max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] h-[520px] sm:h-[580px] lg:h-[620px] shrink-0 snap-start"
            >
              <ProjectCard p={p} className="h-full w-full" />
            </div>
          ))}

          {/* End spacing spacer */}
          <div className="w-8 shrink-0" aria-hidden="true" />
        </div>

        {visible.length === 0 && (
          <p className="mt-16 text-center text-neutral-500 text-base">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}

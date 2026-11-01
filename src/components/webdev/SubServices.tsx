import React, { useState, useRef, useEffect, useCallback } from "react";
import { siteData } from "@/data/webdev/siteData";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SubServicesProps {
  data?: typeof siteData.subservices;
}

const FALLBACK_SUB_IMAGES = [
  "/assets/subservices/web-strategy.webp",
  "/assets/subservices/frontend-development.webp",
  "/assets/subservices/bacekend-development.webp",
  "/assets/subservices/cms-intregation.webp",
  "/assets/subservices/testing-qa.webp",
  "/assets/subservices/SEO-basic.webp",
  "/assets/subservices/Deployment.webp",
  "/assets/subservices/Maintence-support.webp",
];

export const SubServices: React.FC<SubServicesProps> = ({ data }) => {
  const subservices = data || siteData.subservices;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cardWidth, setCardWidth] = useState(380);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const gap = 24;

  // Triplicate cards for completely seamless infinite loop
  const loopCards = [...subservices.cards, ...subservices.cards, ...subservices.cards];

  // Update card width on resize
  useEffect(() => {
    const updateDimensions = () => {
      let width = 380;
      if (window.innerWidth < 640) {
        width = 290;
      } else if (window.innerWidth < 1024) {
        width = 330;
      }
      setCardWidth(width);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Continuous horizontal infinite loop animation
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    // Smooth, calibrated speed for pleasant reading
    const speed = 0.9;

    const tick = () => {
      if (!isHovered && !isDraggingRef.current && el) {
        el.scrollLeft += speed;
        // Total track is 3 sets of cards; reset seamlessly when passing 1 full set (1/3 of total)
        const oneSetWidth = subservices.cards.length * (cardWidth + gap);
        if (el.scrollLeft >= oneSetWidth * 2) {
          el.scrollLeft -= oneSetWidth;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += oneSetWidth;
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isHovered, cardWidth, gap, subservices.cards.length]);

  const handlePrev = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
  }, [cardWidth, gap]);

  const handleNext = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
  }, [cardWidth, gap]);

  // Touch and mouse drag handlers for seamless manual scrolling
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollStartRef.current = el.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const el = scrollRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    el.scrollLeft = scrollStartRef.current - walk;
  };

  const onMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  return (
    <section
      id="services"
      className="bg-[#F7F8F9] py-[64px] sm:py-[80px] md:py-[140px] overflow-hidden relative select-none"
    >
      <div className="container mx-auto px-[16px] 2xl:px-0">
        {/* Header */}
        <div className="mb-[40px] md:mb-[60px] text-center max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="bg-[#1C1A1A] inline-flex items-center text-white text-[15px] md:text-[16px] font-medium leading-[24px] rounded-[40px] px-[16px] py-[8px]">
              <span className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] bg-[#9AFD0D] rounded-full mr-[12px] inline-flex" />
              {subservices.block_title}
            </span>
          </div>
          <h2
            className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[clamp(32px,4.24vw,70px)] leading-[1.18] tracking-tight text-[#070707]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
          >
            {subservices.main_title}
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-end gap-3 mb-6 px-4">
          <button
            type="button"
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-neutral-300 bg-white text-neutral-800 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 hover:bg-black hover:text-white hover:border-black"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-neutral-300 bg-white text-neutral-800 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 hover:bg-[#9AFD0D] hover:text-black hover:border-[#9AFD0D]"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Viewport Container (Continuous horizontal loop with drag & hover pause) */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            onMouseUpOrLeave();
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUpOrLeave}
          className="w-full overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing pb-8 pt-2 px-1 no-scrollbar select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex gap-[20px] md:gap-[24px] w-max will-change-transform">
            {loopCards.map((card, idx) => {
              const fallbackImg = FALLBACK_SUB_IMAGES[idx % FALLBACK_SUB_IMAGES.length]!;
              const resolvedImage =
                card.image &&
                !card.image.includes("\u2028") &&
                !card.image.includes("six2eight.com")
                  ? card.image
                  : fallbackImg;

              return (
                <div
                  key={`${card.heading}-${idx}`}
                  style={{ width: `${cardWidth}px` }}
                  className="shrink-0 transition-transform duration-300 hover:scale-[1.01]"
                >
                  <div
                    className="service-card sub-service-card relative bg-center bg-cover rounded-[20px] lg:rounded-[24px] flex justify-between flex-col overflow-hidden group h-[440px] md:h-[540px] lg:h-[610px] select-none cursor-pointer shadow-md border border-neutral-200/40"
                    style={{ backgroundImage: `url(${resolvedImage})` }}
                  >
                    {/* Dark gradient overlay to guarantee text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/15 pointer-events-none transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/50" />

                    {/* Top block spacer */}
                    <div className="top-block relative z-10 flex justify-end pt-[28px] pr-[28px]">
                      <span className="size-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xs font-mono">
                        0{(idx % subservices.cards.length) + 1}
                      </span>
                    </div>

                    {/* Bottom expanding panel */}
                    <div className="botton-block relative z-10 p-[20px] sm:p-[24px] lg:p-[32px] block rounded-b-[20px] lg:rounded-b-[24px]">
                      <h3 className="text-[22px] md:text-[28px] lg:text-[32px] leading-[1.18] font-semibold text-white tracking-tight transform transition-transform duration-300 ease-out group-hover:text-[#9AFD0D]">
                        {card.heading}
                      </h3>
                      <div className="excerpt-content mt-2 text-[#ededed] text-[14px] md:text-[15px] leading-[23px] font-normal line-clamp-3 group-hover:line-clamp-none transition-all">
                        {card.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

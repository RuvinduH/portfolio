"use client";

import memojiAvatar1 from "@/assets/images/memoji-avatar-7.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-8.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-9.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-10.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";
import { Fragment, useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Jay Shah",
    position: "Technical Lead @ Westpac - Managed Ruvindu directly",
    text: "Ruvindu is a great guy to work with, he is always on time for his deliveries and works on the tasks assigned to him with the best of his abilities. He is leaving my team for the reasons out of my control but would have loved to keep him on for as long as possible.",
    avatar: memojiAvatar4,
  },
  {
    name: "Rishabh Sharma",
    position: "Senior Developer @ Westpac - Worked with Ruvindu",
    text: "I worked with Ruvindu on upgrading various Java applications to improve security and undertake major framework upgrades. He is an excellent team player who consistently delivered high quality and efficient code. He always tries to find better ways of doing things by adopting new tools and technologies. I highly recommend Ruvindu for any software development role.",
    avatar: memojiAvatar2,
  },
  {
    name: "Triet Lai",
    position: "Technical Lead @ Westpac - Worked with Ruvindu",
    text: "I have worked with Ruvindu for several months on a Snyk adoption project, during this time, Ruvindu has quickly had a good grasp of Westpac / St. George Online Banking applications, demonstrating a strong ability to learn, adapt and grow in a short period. His independent work style and solid knowledge in Maven, Java, JSP, and JavaScript has enabled him to address several issues successfully and efficiently. Dedicated and focused, he consistently met deadlines, ensuring the applications remained secure and reliable for our customers.",
    avatar: memojiAvatar3,
  },
  {
    name: "Sanket Kumar",
    position: "Backend Developer @ Westpac - Worked with Ruvindu",
    text: "I’ve had the pleasure of working with Ruvindu on the Compass application at Westpac, and it’s been a great experience. He’s not only a talented Java Developer with strong technical skills, but also a genuine team player who’s always ready to collaborate and support others. His positive attitude and commitment make a real difference, and I truly enjoy working alongside him.",
    avatar: memojiAvatar1,
  },
];

export const TestimonialsSection = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  // Speeds (px per ms). Positive increases scrollLeft (content drifts LEFT).
  const BASE = 0.08; // default slow left drift
  const MAX = 0.5; // fast at edges
  const velocityRef = useRef<number>(BASE);
  const [paused, setPaused] = useState(false);

  // Center the scroll so left drift works immediately (no stick at 0)
  useEffect(() => {
    const center = () => {
      const scroller = scrollerRef.current;
      const row = rowRef.current;
      if (!scroller || !row) return;
      const singleWidth = row.scrollWidth / 2; // width of ONE copy
      if (singleWidth > 0) scroller.scrollLeft = singleWidth / 2;
    };
    const r1 = requestAnimationFrame(center);
    const ro = new ResizeObserver(center);
    if (rowRef.current) ro.observe(rowRef.current);
    window.addEventListener("load", center);
    return () => {
      cancelAnimationFrame(r1);
      ro.disconnect();
      window.removeEventListener("load", center);
    };
  }, []);

  // RAF loop to move by velocity and wrap both edges
  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = now - last;
      last = now;

      const scroller = scrollerRef.current;
      const row = rowRef.current;
      if (scroller && row && !paused) {
        const singleWidth = row.scrollWidth / 2; // width of ONE copy
        scroller.scrollLeft += velocityRef.current * dt;

        if (scroller.scrollLeft >= singleWidth)
          scroller.scrollLeft -= singleWidth;
        if (scroller.scrollLeft <= 0) scroller.scrollLeft += singleWidth;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  // Helpers for edge overlays
  const steerLeft = (e: React.MouseEvent<HTMLDivElement>) => {
    // RIGHT edge overlay -> move LEFT (positive velocity)
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1 from overlay's left
    const k = 1 - Math.min(Math.max(x, 0), 1); // closer to right edge => bigger k
    velocityRef.current = BASE + k * (MAX - BASE);
  };

  const steerRight = (e: React.MouseEvent<HTMLDivElement>) => {
    // LEFT edge overlay -> move RIGHT (negative velocity)
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1 from overlay's left
    const k = Math.min(Math.max(x, 0), 1); // closer to left edge => bigger k
    velocityRef.current = -(BASE + (1 - k) * (MAX - BASE));
  };

  const resetDrift = () => {
    velocityRef.current = BASE; // default slow left
  };

  return (
    <section
      id="testimonials"
      className="py-16 lg:py-24 -scroll-mt-6 lg:-scroll-mt-10 xl:-scroll-mt-6"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Happy Teammates"
          title="What My Peers Say About Me"
          description="Don't just take my word for it. See what my peers say about my work"
        />

        <div
          className="mt-12 lg:mt-20 relative py-4 -my-4"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Edge hit-zones (on top, only at edges) */}
          <div
            className="pointer-events-none absolute inset-0 z-20"
            aria-hidden
          >
            {/* LEFT edge => steer RIGHT */}
            <div
              className="absolute inset-y-0 left-0 pointer-events-auto w-[22%] md:w-[18%] xl:w-[15%]"
              onMouseEnter={() => setPaused(false)}
              onMouseMove={steerRight}
              onMouseLeave={resetDrift}
            />

            {/* RIGHT edge => steer LEFT */}
            <div
              className="absolute inset-y-0 right-0 pointer-events-auto w-[22%] md:w-[18%] xl:w-[15%]"
              onMouseEnter={() => setPaused(false)}
              onMouseMove={steerLeft}
              onMouseLeave={resetDrift}
            />
          </div>

          {/* Scroll container */}
          <div
            ref={scrollerRef}
            className="relative z-10 overflow-x-hidden [overflow-y:visible] py-3 -my-3"
          >
            {/* Row contains TWO copies for seamless loop */}
            <div ref={rowRef} className="flex flex-none gap-8 pr-8 w-max">
              {[...new Array(2)].map((_, dup) => (
                <Fragment key={dup}>
                  {testimonials.map((t) => (
                    <div
                      key={`${dup}-${t.name}`}
                      // Pause when hovering a card
                      onMouseEnter={() => setPaused(true)}
                      onMouseLeave={() => setPaused(false)}
                    >
                      <Card className="p-5 max-w-xs md:max-w-md md:p-8 transition duration-300 hover:rotate-3">
                        <div className="flex gap-4 items-center">
                          <div className="relative size-20 lg:size-24 shrink-0 overflow-hidden rounded-full bg-gray-700">
                            <Image
                              src={t.avatar}
                              alt={t.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="font-semibold md:text-lg">
                              {t.name}
                            </div>
                            <div className="text-sm md:text-base text-white/40">
                              {t.position}
                            </div>
                          </div>
                        </div>
                        <p className="mt-4 md:mt-6 text-sm md:text-base">
                          {t.text}
                        </p>
                      </Card>
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

'use client';

/**
 * Section 3 — Video Feature / Where technology meets design
 * Source: §5.9, §6 row 3, §13.5 video responsive
 *
 * Slots: video.title, video.watermark
 */

import { useState } from 'react';

export function VideoFeature() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="design"
      className={[
        'video-feature-section relative overflow-hidden rounded-[64px] bg-[#090a0c] mx-4 lg:mx-6',
        'py-[200px] max-[991px]:py-[160px] max-[767px]:py-[80px]',
        'max-[991px]:rounded-[40px] max-[767px]:rounded-[24px]',
      ].join(' ')}
    >
      {/* Watermark — huge background text (§5.9) */}
      <div
        aria-hidden
        className={[
          'video-section-bg-text pointer-events-none absolute inset-0 -z-10 flex items-center justify-center',
          'text-[#121418] font-medium tracking-[-0.03em] select-none overflow-hidden whitespace-nowrap',
          'text-[clamp(16px,25cqw,336px)]',
        ].join(' ')}
      >
        {/* SLOT: video.watermark */}
        OmbiBot
      </div>

      <div className="video-feature-container container-default relative z-10 mx-auto px-6 text-center">
        <h2
          id="video-feature-title"
          className="video-feature-title mb-12 text-[48px] max-[991px]:text-[36px] max-[767px]:text-[32px] font-medium leading-[1.25em] text-white animate-on-scroll opacity-0 translate-y-[50px]"
        >
          Where technology meets design
        </h2>

        <div className="video-feature-player relative overflow-hidden rounded-[32px] bg-[#121418] animate-on-scroll opacity-0 translate-y-[50px]">
          {/* Placeholder aspect ratio box — replace with real video thumbnail */}
          <div
            className="relative pt-[56.25%] cursor-pointer"
            onClick={() => setPlaying(true)}
            role="button"
            aria-label="Play video"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setPlaying(true)}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-[#090a0c]">
              {/* Play button SVG — 98×98 on desktop, 64×64 on mobile */}
              <button
                aria-label="Play"
                className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-transform duration-300 hover:scale-95 max-[767px]:h-16 max-[767px]:w-16"
              >
                <svg viewBox="0 0 24 24" fill="white" className="h-8 w-8 ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Video embed (shown after play) */}
          {playing && (
            <div className="absolute inset-0">
              {/* Replace src with actual video embed URL */}
              <iframe
                className="h-full w-full"
                src="about:blank"
                title="Product video"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

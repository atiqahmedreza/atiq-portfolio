"use client";

export function AnimatedSiteBackground() {
  return (
    <div className="site-bg-root pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="site-bg-base absolute inset-0" />
      <div className="site-bg-grid absolute inset-0 opacity-[0.35]" />
      <div className="site-bg-orb site-bg-orb-a absolute left-[-12%] top-[8%] h-[42vmin] w-[42vmin] rounded-full" />
      <div className="site-bg-orb site-bg-orb-b absolute right-[-8%] top-[22%] h-[38vmin] w-[38vmin] rounded-full" />
      <div className="site-bg-orb site-bg-orb-c absolute bottom-[12%] left-[18%] h-[36vmin] w-[36vmin] rounded-full" />
      <div className="site-bg-orb site-bg-orb-d absolute bottom-[8%] right-[12%] h-[44vmin] w-[44vmin] rounded-full" />
      <div className="site-bg-shimmer absolute inset-0" />
      <div className="site-bg-vignette absolute inset-0" />
    </div>
  );
}

import React, { useRef, useEffect } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4';

const FADE_DURATION = 0.5; // seconds

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const isFadingIn = useRef(false);
  const isFadingOut = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start at opacity 0 and fade in after play starts
    video.style.opacity = '0';

    const tick = () => {
      if (!video || !video.duration) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const current = video.currentTime;
      const duration = video.duration;
      const timeLeft = duration - current;

      // Fade in at the start
      if (current < FADE_DURATION) {
        const progress = current / FADE_DURATION;
        video.style.opacity = String(Math.min(progress, 1));
        isFadingIn.current = true;
        isFadingOut.current = false;
      }
      // Fade out near end
      else if (timeLeft < FADE_DURATION) {
        const progress = timeLeft / FADE_DURATION;
        video.style.opacity = String(Math.max(progress, 0));
        isFadingOut.current = true;
        isFadingIn.current = false;
      }
      // Fully visible in the middle
      else {
        video.style.opacity = '1';
        isFadingIn.current = false;
        isFadingOut.current = false;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
      }, 100);
    };

    const handlePlay = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('play', handlePlay);

    // Auto-start
    video.play().catch(() => {});

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('play', handlePlay);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="absolute w-full overflow-hidden"
      style={{ inset: 'auto 0 0 0', top: '300px', zIndex: 0 }}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: 0,
          transition: 'none',
        }}
      />

      {/* Gradient overlay: top and bottom fade to white background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #ffffff 0%, transparent 25%, transparent 75%, #ffffff 100%)',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default VideoBackground;

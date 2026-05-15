import { useEffect, useRef, useState } from "react";

/**
 * useInView — detects when an element enters the viewport.
 * @param {object} options - IntersectionObserver options
 * @returns {{ ref, inView }}
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Unobserve after first trigger for performance
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}

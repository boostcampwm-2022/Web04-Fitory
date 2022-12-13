import { useEffect, useRef, useCallback } from "react";

const useIntersect = (onIntersect: () => void, options?: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          onIntersect();
        }
      });
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(containerRef.current);
    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, [containerRef, options, handleIntersect]);

  return containerRef;
};

export default useIntersect;

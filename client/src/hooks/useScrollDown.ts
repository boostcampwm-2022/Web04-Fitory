import { useRef, useEffect } from "react";

function useScrollDown(dependencies?: unknown[]) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetElement = scrollRef.current;
    if (targetElement) {
      targetElement.scrollTop = targetElement.scrollHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return scrollRef;
}

export default useScrollDown;

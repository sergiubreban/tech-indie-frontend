import { useState } from 'react';
import { useEffect } from 'react';


function getScrollPercent() {
  if (!document)
    return null
  const h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
  return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}


const useTopScrollPercent = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const percent = getScrollPercent()
      percent && setOffset(percent)
    }
    window?.addEventListener?.("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return offset
}

export { useTopScrollPercent }
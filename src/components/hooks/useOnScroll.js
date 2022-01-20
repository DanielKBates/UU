import { useRef, useState, useEffect } from "react"

const useOnScroll = (options) => {
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const scrollCallBack = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(scrollCallBack, options);
    let currentRef= scrollRef.current
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [scrollRef, options]);
  return [scrollRef, isVisible]
}

export default useOnScroll;
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true, 
      lerp: 0.1, 
      multiplier: 1.2, 
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScroll;

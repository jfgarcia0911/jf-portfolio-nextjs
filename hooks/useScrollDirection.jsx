import { useState, useEffect, useRef } from "react";

export function useScrollDirection(threshold = 100) {
  const [direction, setDirection] = useState("up");
  const lastY = useRef(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 50) {
        setDirection("up");
      } else if (currentY < lastY.current && currentY > threshold) {
        setDirection("up");
      } else if (currentY > lastY.current && currentY > threshold) {
        setDirection("down");
      }
      lastY.current = currentY;
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, [threshold]);

  return direction;
}

import { useEffect, useState } from "react";

export const useScrollTop = (threshold = 10) => {
    const [scrollTop, setScrollTop] = useState(false);
    
  
    useEffect(() => {
          const handleScroll = () => {
            if (window.scrollY > threshold) {
              setScrollTop(false);
            } else {
              setScrollTop(true);
            }
          }


        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, [threshold]);
    
    return scrollTop;
}
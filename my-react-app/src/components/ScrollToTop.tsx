import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
interface ScrollToTopProps {
  onScrollFinish?: () => void; // Optional function type
}

export default function ScrollToTop({ onScrollFinish }: ScrollToTopProps) {
  const { pathname } = useLocation();
  const [scrollFinished, setScrollFinished] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrollFinished(true);
        if (onScrollFinish) onScrollFinish();
      } else {
        setScrollFinished(false);
      }
    };

    window.scrollTo({ top: 0, behavior: "smooth" });

    const checkIfScrollFinished = () => {
      const scrollTimeout = setTimeout(() => {
        if (window.scrollY === 0) {
          setScrollFinished(true);
          if (onScrollFinish) onScrollFinish();
        }
        clearTimeout(scrollTimeout);
      }, 150); // Slight delay to ensure the scroll has completely stopped
    };

    window.addEventListener("scroll", handleScroll);
    checkIfScrollFinished();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, onScrollFinish]);
  useEffect(() => {}, [scrollFinished]);

  return null;
}

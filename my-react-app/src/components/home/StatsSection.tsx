import { useEffect, useState, useRef } from "react";

interface StatItemProps {
  value: string;
  label: string;
}

const formatNumberWithSpaces = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const StatItem = ({ value, label }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && isElementInViewport(ref.current)) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const start = 0;
    const end = parseInt(value.replace(/\D/g, ""));
    if (start === end) return;

    const duration = 1500; // Duration in milliseconds
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(progress * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);

    return () => setCount(end); // Ensure the final count is set
  }, [isVisible, value]);

  return (
    <div className="stats-item" ref={ref}>
      <h2>
        {value.includes("+")
          ? `+${formatNumberWithSpaces(count)}`
          : formatNumberWithSpaces(count)}
      </h2>
      <p>{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="stats-section">
      <StatItem value="+500" label="Clients" />
      <StatItem value="+50 000" label="Échantillons traités par an" />
      <StatItem value="+25 ans" label="d'expérience" />
    </div>
  );
};

export default StatsSection;

"use client";

import { useEffect, useState, useRef, ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
};

function FadeIn({ children }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
    >
      {children}
    </div>
  );
}

export default FadeIn;

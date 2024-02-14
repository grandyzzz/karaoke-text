"use client"
import { ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType, { TargetElement } from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface KaraokeTextProps {
  className?: string;
  children: ReactNode;
}

function KaraokeText({ className, children }: KaraokeTextProps) {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    const text = new SplitType(textRef.current as TargetElement, {
      types: "words,chars",
    });

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 0.5,
        markers: false,
      },
      opacity: 0.2,
      stagger: 0.1,
    });
  }, []);

  return (
    <h2 className={className} ref={textRef}>
      {children}
    </h2>
  );
}

export default KaraokeText;

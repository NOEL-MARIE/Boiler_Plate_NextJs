"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursorInteractive() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    // Suivi de la souris
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);

    // Hover sur les éléments ciblés
    const targets = document.querySelectorAll(".hover-target");

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Clic : scale rapide
    const handleClick = () => {
      if (cursorRef.current) {
        gsap.fromTo(
          cursorRef.current,
          { scale: 1 },
          { scale: 0.5, duration: 0.1, yoyo: true, repeat: 1, ease: "power1.inOut" }
        );
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleClick);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      {!isHover ? (
        // SVG curseur normal
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="44"
          viewBox="0 0 23 24"
          fill="none"
        >
          <path
            d="M15.6525 11.889L14.3463 12.3433C13.4198 12.6656 12.9566 12.8267 12.6272 13.1646C12.2978 13.5025 12.1486 13.9697 11.8501 14.9041L11.4885 16.036C10.7053 18.4878 10.3137 19.7137 9.58334 19.7137C8.85301 19.7137 8.4614 18.4878 7.67819 16.036L5.05119 7.81238C4.51983 6.14901 4.25416 5.31732 4.69682 4.88582C5.13949 4.45431 5.96412 4.74114 7.61339 5.3148L15.6525 8.11101C17.9104 8.89638 19.0394 9.28906 19.0394 10C19.0394 10.7109 17.9104 11.1036 15.6525 11.889Z"
            fill="#7E869E"
            fillOpacity="0.25"
          />
          <path
            d="M15.6525 11.889L14.3463 12.3433C13.4198 12.6656 12.9566 12.8267 12.6272 13.1646C12.2978 13.5025 12.1486 13.9697 11.8501 14.9041L11.4885 16.036C10.7053 18.4878 10.3137 19.7137 9.58334 19.7137C8.85301 19.7137 8.4614 18.4878 7.67819 16.036L5.05119 7.81238C4.51983 6.14901 4.25416 5.31732 4.69682 4.88582C5.13949 4.45431 5.96412 4.74114 7.61339 5.3148L15.6525 8.11101C17.9104 8.89638 19.0394 9.28906 19.0394 10C19.0394 10.7109 17.9104 11.1036 15.6525 11.889Z"
            fill="#222222"
            stroke="white"
          />
          <path
            d="M13.8886 13.8358L15.8104 13.1674C16.1127 13.0622 16.4472 13.1082 16.71 13.291L17.7403 14.0078C18.3011 14.3979 18.1465 15.2661 17.4854 15.4386L15.6235 15.9243C15.4449 15.9709 15.3065 16.1121 15.2635 16.2916L14.8136 18.1693C14.6492 18.8556 13.7414 19.0083 13.3615 18.4136L12.711 17.3956C12.5509 17.145 12.5107 16.8361 12.6012 16.5529L13.2646 14.476C13.3603 14.1763 13.5915 13.9392 13.8886 13.8358Z"
            fill="#222222"
            stroke="white"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        // SVG curseur hover
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="15"
          viewBox="0 0 10 15"
          fill="none"
        >
          <path
            d="M0 0.5H5M5 0.5H10M5 0.5V14.5M0 14.5H5M5 14.5H10"
            stroke="#222222"
          />
        </svg>
      )}
    </div>
  );
}

import { useEffect } from "react";

// Nền động: aurora blob + lưới + "spotlight" bám theo con trỏ chuột.
export default function Background() {
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <>
      <div className="aurora" aria-hidden />
      <div className="grid-overlay" aria-hidden />
      <div className="spotlight" aria-hidden />
    </>
  );
}

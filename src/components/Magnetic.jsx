import { useRef } from "react";
import gsap from "gsap";

// Bọc bất kỳ phần tử nào để nó "hút" nhẹ về phía con trỏ khi hover.
export default function Magnetic({ children, strength = 0.4, className = "" }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    gsap.to(el, { x, y, duration: 0.6, ease: "power3.out" });
  };

  const reset = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}

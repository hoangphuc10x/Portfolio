import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Hook tiện ích: animate các phần tử có class `.reveal` bên trong container
// khi cuộn tới. Stagger nhẹ để tạo cảm giác mượt mà.
//
// `deps`: mảng phụ thuộc — khi thay đổi (vd đổi ngôn ngữ), animation chạy lại.
// Cần thiết vì khi đổi ngôn ngữ, React thay key → tạo DOM node mới mang class
// `.reveal` (opacity 0); nếu không chạy lại, chúng sẽ kẹt ở trạng thái ẩn.
export function useReveal({ y = 40, stagger = 0.12, start = "top 85%" } = {}, deps = []) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".reveal");
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          stagger,
          scrollTrigger: { trigger: el, start },
        }
      );
    }, el);

    // Đảm bảo ScrollTrigger tính lại vị trí sau khi DOM cập nhật
    ScrollTrigger.refresh();

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y, stagger, start, ...deps]);

  return ref;
}

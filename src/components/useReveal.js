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
// Phần tử có thêm class `.reveal-left` / `.reveal-right` sẽ TRÔI DẠT từ bên
// trái / phải vào (offset theo `x`). Mặc định `.reveal` trôi từ dưới lên (`y`).
export function useReveal({ y = 40, x = 90, stagger = 0.12, start = "top 85%" } = {}, deps = []) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".reveal");
    if (!targets.length) return;

    const isLR = (t) =>
      t.classList.contains("reveal-left") || t.classList.contains("reveal-right");

    const mm = gsap.matchMedia();

    // Responsive: khoảng dạt nhỏ trên mobile (màn hẹp), vừa trên tablet,
    // đầy đủ trên desktop. Tôn trọng prefers-reduced-motion.
    mm.add(
      {
        reduce: "(prefers-reduced-motion: reduce)",
        mobile: "(prefers-reduced-motion: no-preference) and (max-width: 639px)",
        tablet:
          "(prefers-reduced-motion: no-preference) and (min-width: 640px) and (max-width: 1023px)",
        desktop: "(prefers-reduced-motion: no-preference) and (min-width: 1024px)",
      },
      (context) => {
        const { reduce, mobile, tablet } = context.conditions;

        // Người dùng tắt chuyển động → hiện luôn, không animate.
        if (reduce) {
          gsap.set(targets, { opacity: 1, x: 0, y: 0, filter: "none" });
          return;
        }

        const dist = mobile ? 36 : tablet ? 60 : x; // px trôi ngang theo cỡ màn
        const yDist = mobile ? 26 : y; // px trôi dọc theo cỡ màn

        // Trạng thái ẩn ban đầu — hướng trôi theo class:
        // trái → -dist, phải → +dist, còn lại trôi từ dưới lên.
        gsap.set(targets, {
          opacity: 0,
          filter: "blur(8px)",
          x: (i, t) =>
            t.classList.contains("reveal-left") ? -dist
            : t.classList.contains("reveal-right") ? dist
            : 0,
          y: (i, t) => (isLR(t) ? 0 : yDist),
        });

        // batch: MỖI phần tử tự kích hoạt khi chính nó vào khung nhìn — nên trên
        // mobile (section dài) "kéo tới đâu sạt tới đó", không hiện trước hàng loạt.
        ScrollTrigger.batch(targets, {
          start,
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
              duration: mobile ? 0.8 : 1,
              ease: "power3.out",
              stagger: mobile ? stagger * 0.7 : stagger,
              overwrite: true,
            }),
        });
      }
    );

    // Đảm bảo ScrollTrigger tính lại vị trí sau khi DOM cập nhật
    ScrollTrigger.refresh();

    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y, x, stagger, start, ...deps]);

  return ref;
}

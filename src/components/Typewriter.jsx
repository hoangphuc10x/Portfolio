import { useEffect, useState } from "react";

// Hiệu ứng đánh máy, lần lượt qua các chuỗi rồi xoá đi.
export default function Typewriter({ words, className = "" }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let delay = deleting ? 45 : 90;

    if (!deleting && text === current) {
      delay = 1400; // dừng lại khi gõ xong
    } else if (deleting && text === "") {
      delay = 300;
    }

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setI((v) => v + 1);
      } else {
        setText(
          current.substring(0, deleting ? text.length - 1 : text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return <span className={`caret ${className}`}>{text}</span>;
}

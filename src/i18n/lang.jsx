import { createContext, useContext, useEffect, useState } from "react";
import { content, languages } from "../data/content.js";

const LangContext = createContext(null);
const STORAGE_KEY = "portfolio-lang";
const DEFAULT_LANG = "vi";

function detectInitial() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && content[saved]) return saved;
    const nav = (navigator.language || "").toLowerCase();
    if (nav.startsWith("vi")) return "vi";
    if (nav.startsWith("zh")) return "zh";
    if (nav.startsWith("en")) return "en";
  } catch {
    /* SSR / storage chặn — dùng mặc định */
  }
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitial);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* bỏ qua nếu không lưu được */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const value = { lang, setLang, t: content[lang], languages };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// Hook: trả về { lang, setLang, t, languages }. `t` là toàn bộ nội dung của ngôn ngữ hiện tại.
export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang phải nằm trong <LanguageProvider>");
  return ctx;
}

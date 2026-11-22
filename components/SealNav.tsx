"use client";

import { useEffect, useState } from "react";

const marks = [
  { id: "intro", cn: "序", en: "Intro" },
  { id: "about", cn: "我", en: "About" },
  { id: "work", cn: "作", en: "Work" },
  { id: "path", cn: "历", en: "Path" },
  { id: "contact", cn: "信", en: "Contact" },
];

/** Not a navbar: a column of seal marks down the margin, like chops on a scroll. */
export default function SealNav() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    for (const { id } of marks) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return (
    <nav
      className={`seals ${active === "contact" ? "onDark" : ""}`}
      aria-label="Sections"
    >
      {marks.map((m) => (
        <a
          key={m.id}
          href={`#${m.id}`}
          className={active === m.id ? "seal active" : "seal"}
          aria-current={active === m.id ? "true" : undefined}
          aria-label={m.en}
        >
          <span className="sealChar" aria-hidden="true">
            {m.cn}
          </span>
          <span className="sealLabel" aria-hidden="true">
            {m.en}
          </span>
        </a>
      ))}
    </nav>
  );
}

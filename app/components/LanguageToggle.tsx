"use client";

type Lang = "de" | "ru";

export default function LanguageToggle({
  lang,
  onChange,
}: {
  lang: Lang;
  onChange: (next: Lang) => void;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur">
      <button
        type="button"
        onClick={() => onChange("de")}
        className={[
          "rounded-full px-3 py-1 text-xs font-semibold transition",
          lang === "de"
            ? "bg-white text-neutral-900"
            : "text-white/80 hover:text-white",
        ].join(" ")}
      >
        DE
      </button>
      <button
        type="button"
        onClick={() => onChange("ru")}
        className={[
          "rounded-full px-3 py-1 text-xs font-semibold transition",
          lang === "ru"
            ? "bg-white text-neutral-900"
            : "text-white/80 hover:text-white",
        ].join(" ")}
      >
        RU
      </button>
    </div>
  );
}
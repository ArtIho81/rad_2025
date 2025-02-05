import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { languages } from "../../context/LanguageContext";

export const LanguageSelector = () => {
  const { lang, setLang } = useLanguage();
  return (
    <select
      value={lang}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        setLang(e.target.value)
      }
    >
      {languages.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

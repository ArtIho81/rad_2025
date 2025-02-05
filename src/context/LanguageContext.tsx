import { createContext, FC, PropsWithChildren, useState } from "react";

export type LanguageContextType = {
  lang: string;
  setLang: (lang: string) => void;
};

export const languages = ["UA", "EN"];

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [lang, setLang] = useState(languages[0]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

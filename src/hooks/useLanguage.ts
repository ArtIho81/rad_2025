import { useContext } from "react";
import {
  LanguageContext,
  LanguageContextType,
} from "../context/LanguageContext";

export const useLanguage = (): LanguageContextType => {
  const lang = useContext(LanguageContext);
  if (!lang) {
    throw new Error();
  }
  return lang;
};

import { pages } from "../components/header/NavBar";
import { useLanguage } from "../hooks/useLanguage";

export const HomePage = () => {
  const { lang } = useLanguage();

  return (
    <>
      <h1>{pages[lang][0]}</h1>
    </>
  );
};

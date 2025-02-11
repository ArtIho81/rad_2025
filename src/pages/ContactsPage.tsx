import { pages } from "../components/header/NavBar";
import { useLanguage } from "../hooks/useLanguage";

export const ContactsPage = () => {
  const { lang } = useLanguage();

  return (
    <>
      <h1>{pages[lang][3]}</h1>
    </>
  );
};

import "./Header.css";
import { NavBar } from "./NavBar";
import { LanguageSelector } from "./LanguageSelector";

export const Header = () => {
  return (
    <header>
        <div>Logo</div>
        <NavBar />
        <LanguageSelector />
    </header>
  );
};

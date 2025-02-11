import { NavLink } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

export const pages: { [key: string]: string[] } = {
  EN: ["Home", "About", "Products", "Contacts"],
  UA: ["Домашня", "Про нас", "Продукція", "Контакти"],
};

export const NavBar = () => {
  const { lang } = useLanguage();
  return (
    <nav>
      <ul>
        {pages[lang].map((item, index) => {
          const page =
            pages.EN[index] === "Home"
              ? "/"
              : pages.EN[index].toLocaleLowerCase();
          return (
            <li key={item} className="nav-item">
              <NavLink to={page} className='nav-link'>{item}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

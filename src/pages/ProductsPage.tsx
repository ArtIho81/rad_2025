import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import { pages } from "../components/header/NavBar";
import { Link } from "react-router-dom";

export const products: { [key: string]: string[] } = {
  EN: ["product1", "product2", "product3"],
  UA: ["продукція1", "продукція2", "продукція3"],
};

export const ProductsPage = () => {
  const { lang } = useLanguage();

  return (
    <>
      <h1>{pages[lang][2]}</h1>
      <ul>
        {products[lang].map((item, index) => (
          <li>
            <Link to={products.EN[index]}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

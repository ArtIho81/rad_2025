import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "./ProductsPage";
import { ProductCard } from "../components/ProductCard";

export const ProductPage = () => {
  const { lang } = useLanguage();
  const { product } = useParams();
  const navigate = useNavigate();

  const productName = () => {
    if (lang !== "EN" && product) {
      const index = products.EN.findIndex((item) => item === product);
      return products[lang][index];
    }
    return product;
  };

  return (
    <>
      <ProductCard title={productName()} />
      <button onClick={()=>navigate(-1)}>Back</button>
    </>
  );
};

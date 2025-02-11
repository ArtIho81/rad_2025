import { FC } from "react";

type ProductCardProps = {
  title?: string;
};

export const ProductCard: FC<ProductCardProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => {}}>Buy</button>
    </div>
  );
};

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img = "", className , style} : Props) => {
  const { product } = useContext(ProductContext);
  const imgToShow: string = (img ? img : product.img) || noImage;

  return (
    <img className={`${styles.productImg} ${className}`} src={imgToShow} alt="Product" style={style} />
  );
};

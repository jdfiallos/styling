import styles from "../styles/styles.module.css";
import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  const titleToShow: string = title ? title : product.title;

  return <span className={`${styles.productDescription} ${className}`} style={ style }>{titleToShow}</span>;
};


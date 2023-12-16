import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  const imgToShow: string = (img ? img : product.img) || noImage;

  return (
    <div>
      <img className={styles.productImg} src={imgToShow} alt="Product" />
    </div>
  );
};

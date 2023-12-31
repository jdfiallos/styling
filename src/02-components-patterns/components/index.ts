import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardMainProps } from "../interfaces/Product.Interface";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardMainProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;

import { Props as ProductButtonProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps  } from "../components/ProductTitle";

export interface Product {
  id: number;
  description: string;
  img?: string;
  price: number;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardMainProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}
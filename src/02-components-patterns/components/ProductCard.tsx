import styles from "../styles/styles.module.css";
import { CSSProperties, ReactNode, createContext } from "react";
import useProduct from "../hooks/useProduct";
import {
  Product,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/Product.Interface";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;  
  value?: number;
}

export const ProductCard = ({ children, product, className, onChange, style, value}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}>
      <div className={`${styles.productCard} ${className}`} style={ style } >{children}</div>
    </Provider>
  );
};

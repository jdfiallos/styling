import styles from "../styles/styles.module.css";
import { CSSProperties,  createContext } from "react";
import useProduct from "../hooks/useProduct";
import {
  InitialValues,
  Product,
  ProductCardHandlers,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/Product.Interface";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ( args: ProductCardHandlers ) => JSX.Element ;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;  
  value?: number;
  initialValue?: InitialValues;
}

export const ProductCard = ({ children, product, className, onChange, style, value, initialValue}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValue });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount
      }}>
      <div className={`${styles.productCard} ${className}`} style={ style } >
        {
          children &&
          children({
            count: counter,
            isMaxCountReached,
            maxCount,
            product,
            increaseBy,
            reset
           })
        }
      </div>
    </Provider>
  );
};

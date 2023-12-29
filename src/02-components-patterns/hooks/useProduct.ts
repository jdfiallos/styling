import { useState } from "react";
import { Product, onChangeArgs } from "../interfaces/Product.Interface";

interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
}

const useProduct = ({ onChange, product }: useProductArgs) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    const newValue = Math.max( counter + value, 0)
    // Misma acction pero diferente arguemnto de entrada.
    // Si el valor es negativo, no se puede restar más de 0.
    setCounter((prev) => Math.max(prev + value, 0));

    onChange?.({ count: newValue, product });
  };

  return {
    counter,
    increaseBy,
  };
};

export default useProduct;

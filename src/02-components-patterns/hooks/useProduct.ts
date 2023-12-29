import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/Product.Interface";

interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
}

const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef( !!onChange );

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    const newValue = Math.max( counter + value, 0)
    // Misma acction pero diferente arguemnto de entrada.
    // Si el valor es negativo, no se puede restar más de 0.
    setCounter((prev) => Math.max(prev + value, 0));

    console.log('se eejcutaba')
    onChange?.({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value])
  

  return {
    counter,
    increaseBy,
  };
};

export default useProduct;

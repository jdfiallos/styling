import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces/Product.Interface";

interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValue?: InitialValues;
}

const useProduct = ({ onChange, product, value = 0, initialValue }: useProductArgs) => {
  const [counter, setCounter] = useState<number>( initialValue?.count || value);
  const isMounted = useRef( false );

  const isControlled = useRef( !!onChange );

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    const newValue = Math.max( counter + value, 0)
    if ( initialValue?.maxCount && (newValue > initialValue?.maxCount) ) return;

    setCounter((prev) => Math.max(prev + value, 0));
    onChange?.({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValue?.count || value || 0);
  }

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [ value ])

  useEffect(() => {
    isMounted.current = true;
  }, [])
  
  

  return {
    counter,
    increaseBy,
    reset,
    isMaxCountReached: !!initialValue?.maxCount && counter === initialValue?.maxCount ,
    maxCount: initialValue?.maxCount,
  };
};

export default useProduct;

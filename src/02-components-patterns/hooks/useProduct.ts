import { useState } from "react";

const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    // Misma acction pero diferente arguemnto de entrada.
    // Si el valor es negativo, no se puede restar más de 0.
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    increaseBy,
  };
};

export default useProduct;

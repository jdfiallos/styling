import { useState } from 'react'
import { Product } from "../interfaces/Product.Interface";

interface ProductInCart extends Product {
    count: number;
  }
  
export const useShoppingCard = () => {
    const [shoppingCart , setShoppingCart ] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({product, count} : {product: Product, count: number}) => {
      setShoppingCart( prevState => {
        const productInCart: ProductInCart = prevState[product.id] || { ...product, count: 0 };
  
        if ( Math.max( productInCart.count + count, 0 ) > 0 ) {
          productInCart.count += count;
          return {
            ...prevState,
            [product.id]: productInCart
          }
        }
        
        const newShoppingCart = { ...prevState };
        delete newShoppingCart[product.id];
        return newShoppingCart;
  
      } );
    } 

    return { shoppingCart, onProductCountChange }

}

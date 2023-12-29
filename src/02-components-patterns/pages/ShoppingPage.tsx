import { useEffect, useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import '../styles/custom-styles.css';
import { Product } from "../interfaces/Product.Interface";

interface productPros {
  id: number;
  title: string;
  img?: string;
  price: number;
  description: string;
}

const product: productPros = {
  id: 1,
  title: "Coffee Mug",
  img: "./coffee-mug.png",
  price: 10,
  description: "Coffee Mug",
};

const product2: productPros = {
  id: 2,
  title: "Coffee Mug - Meme",
  img: "./coffee-mug2.png",
  price: 10,
  description: "Coffee Mug",
};

const products: productPros[] = [product, product2];

interface ProductInCart extends productPros {
  count: number;
}


export const ShoppingPage = () => {
  
  const [shoppingCart , setShoppingCart ] = useState<{ [key: string]: ProductInCart }>({
    '1': { ...product, count: 1 }
  });

  const onProductCountChange = ({product, count} : {product: Product, count: number}) => {

    count === 0 ? setShoppingCart( prevState => {
      const newShoppingCart = { ...prevState };
      delete newShoppingCart[product.id];
      return newShoppingCart;
    } ) : 
    setShoppingCart({ ...shoppingCart, [product.id]: { ...product, count } });
    
  } 

  useEffect(() => {
    console.log('se llamo', shoppingCart);
  }, [shoppingCart])
  

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
          {
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className="bg-dark text-white"
                
                >
                  <ProductImage className="custom-image" />
                  <ProductTitle className="text-bold" />
                  <ProductButtons className="custom-buttons" />
                </ProductCard>
            ))
          }
      </div>

      <div className="shopping-cart">
        <ProductCard
          key={product2.id}
          product={product2}
          className="bg-dark text-white"
          onChange={ onProductCountChange }
          style={{width: '100px'}}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
         </ProductCard>  
      </div>

    </div>
  );
};

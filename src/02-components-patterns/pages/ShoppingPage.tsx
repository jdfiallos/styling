import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import '../styles/custom-styles.css';
import { Product } from "../interfaces/Product.Interface";
import { useShoppingCard } from "../hooks/useShoppingCart";

const product: Product = {
  id: 1,
  title: "Coffee Mug",
  img: "./coffee-mug.png",
  price: 10,
  description: "Coffee Mug",
};

const product2: Product = {
  id: 2,
  title: "Coffee Mug - Meme",
  img: "./coffee-mug2.png",
  price: 10,
  description: "Coffee Mug",
};

const products: Product[] = [product, product2];

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange} = useShoppingCard();

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
                onChange={ onProductCountChange }
                value={shoppingCart[product.id]?.count || 0}
                >
                  <ProductImage className="custom-image" />
                  <ProductTitle className="text-bold" />
                  <ProductButtons className="custom-buttons" />
                </ProductCard>
            ))
          }
      </div>

      <div className="shopping-cart">
       {
        // ANOTHER WAY TO ITERATE AN OBJECT
        // Object.keys(shoppingCart).map((key) => (
        //   <ProductCard
        //     key={shoppingCart[key].id}
        //     product={shoppingCart[key]}
        //     className="bg-dark text-white"
        //     onChange={ onProductCountChange }
        //     style={{width: '100px'}}
        //     >
        //       <ProductImage className="custom-image" />
        //       <ProductButtons style={{
        //           display: 'flex',
        //           justifyContent: 'center'
        //         }} 
        //         className="custom-buttons" 
        //       />
        //  </ProductCard>  
        // ))
        Object.entries( shoppingCart ).map( ([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            onChange={ onProductCountChange }
            style={{width: '100px'}}
            value={product.count}
            >
              <ProductImage className="custom-image" />
              <ProductTitle title={`${product.count}`} />
              <ProductButtons style={{
                  display: 'flex',
                  justifyContent: 'center'
                }} 
                className="custom-buttons" 
              />
        </ProductCard>
        ))
       }
      </div>

    </div>
  );
};

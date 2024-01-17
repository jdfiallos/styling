import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import '../styles/custom-styles.css';
import { Product } from "../interfaces/Product.Interface";

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

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValue={{ count: 4, maxCount: 10 }}


      >
      {
        ( { reset } ) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
            <button onClick={ reset } >Reset</button>
          </>
        )
      }
      </ProductCard>
    </div>
  );
};

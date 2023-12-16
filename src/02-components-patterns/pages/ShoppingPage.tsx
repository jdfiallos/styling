import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import '../styles/custom-styles.css';

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

export const ShoppingPage = () => {
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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={product.title} />
          <ProductCard.Buttons />
        </ProductCard>
{/* 
        <ProductCard className='bg-dark' product={product}>
          <ProductImage className='custom-image' />
          <ProductTitle className='text-white text-bold' title={product.title} />
          <ProductButtons className='custom-buttons' />
        </ProductCard> */}


        <ProductCard
        product={product2}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons  />
        </ProductCard>

      </div>
    </div>
  );
};

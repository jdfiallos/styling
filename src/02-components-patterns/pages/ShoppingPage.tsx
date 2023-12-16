import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

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
          <ProductImage />
          <ProductTitle title={product.title} />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={product.title} />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};

export interface Product {
  id: number;
  title: string;
  img?: string;
  price: number;
  description: string;
}

export interface productCardProps {
  product: Product;
  children?: React.ReactNode;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardMainProps {
  ({ children, product }: productCardProps): JSX.Element;
  Title: ({ title }: { title: string }) => JSX.Element;
  Image: ({ img }: { img?: string | undefined }) => JSX.Element;
  Buttons: () => JSX.Element;
}

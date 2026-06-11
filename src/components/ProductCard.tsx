type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};
type Props = {
  product: Product;
};
export default function ProductCard({ product }: Props) {
  return (
    <div>
      <img src={product.image} alt={product.title} width={80} />
      <p>{product.title}</p>
      <p>${product.price}</p>
    </div>
  );
}

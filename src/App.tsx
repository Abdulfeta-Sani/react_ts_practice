import { useState, useEffect } from "react";
type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};
export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.title} — ${p.price}
        </li>
      ))}
    </ul>
  );
}

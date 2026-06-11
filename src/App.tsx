import ProductCard from "./components/ProductCard";
const mockProduct = {
  id: 1,
  title: "Wireless Mouse",
  price: 29.99,
  image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
};
export default function App() {
  return <ProductCard product={mockProduct} />;
}

import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0); // inferred: number
  const [name, setName] = useState(""); // inferred: string
  const [user, setUser] = useState<string | null>(null); // explicit: string or null
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setUser("Ali")}>Set User</button>
      <p>User: {user ?? "not set"}</p>
    </>
  );
}

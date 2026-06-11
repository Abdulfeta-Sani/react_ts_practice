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
type GreetingProps = {
  name: string;
  age: number;
};
function Greeting({ name, age }: GreetingProps) {
  return (
    <p>
      Hello, {name}. You are {age} years old.
    </p>
  );
}
export default function App() {
  return <Greeting name="Sara" age={25} />;
  <Greeting name="Sara" age="twenty-five" />;
}

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

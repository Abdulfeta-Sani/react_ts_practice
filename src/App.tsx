import { useState } from "react";
export default function App() {
  const [value, setValue] = useState("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  return (
    <input value={value} onChange={handleChange} placeholder="Type here" />
  );
}

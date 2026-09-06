import { useState } from "react";

function Header({ title }) {
  return (
    <h1>{title}</h1>
  );
}

function Counter({ value }) {
  let number = value;

  if (number == "" || typeof number != "number") {
    number = 0;
  }

  return (
    <p>{number}</p>
  )
}

function AddOneButton({ onClick }) {
  return (
    <button onClick={onClick}>+1</button>
  );
}

export default function App() {
  const [value, setValue] = useState(0);

  function addOne() {
    setValue(value + 1);
  }

  return (
    <>
      <Header title="Contador React" />
      <Counter value={value} />
      <AddOneButton onClick={addOne} />
    </>
  );
}

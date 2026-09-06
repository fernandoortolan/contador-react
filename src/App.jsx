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

function SubOneButton({ onClick }) {
  return (
    <button onClick={onClick}>-1</button>
  )
}

function ResetButton({ onClick }) {
  return (
    <button onClick={onClick}>Resetar</button>
  )
}

export default function App() {
  const [value, setValue] = useState(0);

  function addOne() {
    setValue(value + 1);
  }

  function subOne() {
    setValue(value - 1 < 0 ? 0 : value - 1);
  }

  function resetCounter() {
    setValue(0);
  }

  return (
    <>
      <Header title="Contador React" />
      <Counter value={value} />
      <AddOneButton onClick={addOne} />
      <SubOneButton onClick={subOne} />
      <ResetButton onClick={resetCounter} />
    </>
  );
}

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

export default function App() {
  return (
    <>
      <Header title="Contador React" />
      <Counter />
    </>
  );
}

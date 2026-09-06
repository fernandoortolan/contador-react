function Header({ title }) {
  return (
    <h1>{title}</h1>
  );
}

export default function App() {
  return (
    <Header title="Contador React" />
  );
}

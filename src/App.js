import Counter from "./components/Counter/Counter";
import Names from "./components/Names/Names";
import Form from "./components/Form/Form";
import ComplexFormMultipleState from "./components/ComplexFormMultipleState.jsx/ComplexFormMultipleState";
import ComplexForm from "./components/ComplexForm/ComplexForm";
import "./App.scss";
import Time from "./components/Time/Time";

function App() {
  const texto = "Prácica useState:"
  
  return (
    <div className="App">
      <Counter />
      <Names />
      <h1>Formularios:</h1>
      <Form />
      <ComplexFormMultipleState />
      <ComplexForm />

      <Time texto={texto}/>
    </div>
  );
}

export default App;

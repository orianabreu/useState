import Counter from "./components/Counter/Counter";
import Names from "./components/Names/Names";
import Form from "./components/Form/Form";
import ComplexFormMultipleState from "./components/ComplexFormMultipleState.jsx/ComplexFormMultipleState";
import ComplexForm from "./components/ComplexForm/ComplexForm";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Counter />
      <Names />
      <Form />
      <ComplexFormMultipleState />
      <ComplexForm />
    </div>
  );
}

export default App;

import React from "react";
import { Counter } from "./components/counter";
import { Form } from "./components/form";

function App() {
  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

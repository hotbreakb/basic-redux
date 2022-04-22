import React from "react";
import { Form } from "./components/form";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <div className="App">
      <Form onSubmit={onSubmit}></Form>
    </div>
  );
}

export default App;

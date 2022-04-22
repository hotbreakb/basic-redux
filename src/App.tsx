import React from "react";
import { ReducerSample } from "./components/reducer-sample";
import { Provider } from "./components/sample-context";

function App() {
  return (
    <div className="App">
      <Provider>
        <ReducerSample />
      </Provider>
    </div>
  );
}

export default App;

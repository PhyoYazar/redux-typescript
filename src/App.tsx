import React from "react";
import { Provider } from "react-redux";

import RepositoriesLists from "./components/RepositoriesLists";
import { store } from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <h1 className="">Search For a package</h1>

        <RepositoriesLists />
      </div>
    </Provider>
  );
}

export default App;

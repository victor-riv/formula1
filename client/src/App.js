import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Drivers from "./components/Drivers";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Provider store={store}>
      <Drivers />
    </Provider>
  );
};

export default App;

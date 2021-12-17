import * as React from "react";
import * as ReactDom from "react-dom";

import App from "./App";

const mount = (el: Element) => {
  if (el) {
    ReactDom.render(<App />, el);
  }
};

if (process.env.NODE_ENV === "development") {
  mount(document.querySelector("#_sidebar"));
}

export  {
  mount,
};

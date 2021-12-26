import * as React from "react";
import * as ReactDom from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const history = createMemoryHistory();

const mount = (el: Element) => {
  if (el) {
    ReactDom.render(<App history={history} />, el);
  }
};

if (process.env.NODE_ENV === "development") {
  mount(document.querySelector("#_analytics"));
}

export { mount };

import * as React from "react";
import { Router, MemoryRouter } from "react-router-dom";
import * as routeHistory from "history";
import Navigations from "./navigations";

interface IProps {
  history: routeHistory.MemoryHistory;
}
const App: React.FC<IProps> = ({ history }) => {
  return (
    //@ts-ignore
    <MemoryRouter history={history}>
      <Navigations />
    </MemoryRouter>
  );
};

export default App;

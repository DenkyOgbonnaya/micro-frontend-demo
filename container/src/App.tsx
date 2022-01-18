import * as React from "react";
import { BrowserRouter } from "react-router-dom";
const Sidebar = React.lazy(() => import("./components/sidebar/Sidebar"));
const Main = React.lazy(() => import("./navigations"));

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="flex">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[79%]">
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </div>
      </div>
    </React.Suspense>
  );
};

export default App;

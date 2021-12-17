import * as React from "react";

const Sidebar = React.lazy(() => import("./components/sidebar/Sidebar"));

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello world!!!!! Denky</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Sidebar />
      </React.Suspense>
    </div>
  );
};

export default App;

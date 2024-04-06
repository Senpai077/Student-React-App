import React from "react";
import { BrowserRouter, Route, RouterProvider } from "react-router-dom";
import routes from "./projectRouting/Routes";

const App = () => {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
};

export default App;

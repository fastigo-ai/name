import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import rootLoader from "./component/RootLoader";
import AppLayout from "./component/AppLayout";
import Home from "./component/Home";
import About from "./component/About";
// import Product from "./pages/Product/Product"
import Career from "./component/Career";
import EnqueryForm from "./component/EnqueryForm";
import Contact from "./component/Contact";
import Automation from "./Pages/Automation";
// import TestSolutionsTable from './pages/testSolutionsTable';
import ProductMain from "./Pages/Product/ProductMain";
import AutomationPage from './pages/Product/AutomationPage';
import EMCPage from './Pages/Product/EMCPage';
import TestMeasurePage from './Pages/Product/TestMeasurePage';
import ErrorPage from "./component/ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      loader: rootLoader,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product",
          element: <ProductMain />,
          // children={}
        },
        {
          path: "/career",
          element: <Career />,
        },
        {
          path: "/enquery-form",
          element: <EnqueryForm />,
        },
        {
          path: "/automation",
          element: <Automation />,
        },
        {
          path: "/products/automation-industrial-engineering",
          element: <AutomationPage />,
        },
        {
          path: "/products/emc-emi-testing",
          element: <EMCPage />,
        },
        {
          path: "/products/test-measuring",
          element: <TestMeasurePage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;

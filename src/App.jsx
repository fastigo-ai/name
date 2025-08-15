import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import rootLoader from "./component/RootLoader";
import AppLayout from "./component/AppLayout";
import Home from "./component/Home";
import About from "./component/About";
import Career from "./component/Career";
import EnqueryForm from "./component/EnqueryForm";
import Contact from "./component/Contact";
import Automation from "./Pages/Automation";
import ProductMain from "./Pages/Product/ProductMain";
import AutomationPage from "./Pages/Product/AutomationPage";
import EMCPage from "./Pages/Product/EMCPage";
import TestMeasurePage from "./Pages/Product/TestMeasurePage";
import ErrorPage from "./component/ErrorPage";

// A simple fallback element to show during hydration
const PageSkeleton = () => <div>Loading page...</div>;

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        loader: rootLoader,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <PageSkeleton />, // ✅ Top-level fallback
        children: [
          { path: "/", element: <Home />, hydrateFallbackElement: <PageSkeleton /> },
          { path: "/about", element: <About />, hydrateFallbackElement: <PageSkeleton /> },
          { path: "/contact", element: <Contact />, hydrateFallbackElement: <PageSkeleton /> },
          { path: "/product", element: <ProductMain />, hydrateFallbackElement: <PageSkeleton /> },
          { path: "/career", element: <Career />, hydrateFallbackElement: <PageSkeleton /> },
          { path: "/enquery-form", element: <EnqueryForm />, hydrateFallbackElement: <PageSkeleton /> },
          { path: "/automation", element: <Automation />, hydrateFallbackElement: <PageSkeleton /> },
          {
            path: "/products/automation-industrial-engineering",
            element: <AutomationPage />,
            hydrateFallbackElement: <PageSkeleton />,
          },
          {
            path: "/products/emc-emi-testing",
            element: <EMCPage />,
            hydrateFallbackElement: <PageSkeleton />,
          },
          {
            path: "/products/test-measuring",
            element: <TestMeasurePage />,
            hydrateFallbackElement: <PageSkeleton />,
          },
        ],
      },
    ],
    {
      future: {
        v7_partialHydration: true, // ✅ Enables partial hydration
      },
    }
  );

  return <RouterProvider router={router} />;
};

export default App;

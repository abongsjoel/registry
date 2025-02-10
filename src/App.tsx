import Root from "./pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: () => {
          return ["react", "react-redux", "redux"];
        },
      },
      {
        path: "/packages/:name",
        element: <DetailsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

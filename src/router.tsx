import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Page2 from './Page2'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
      path: "/page2",
      element: <Page2 />,
    },
  ]);
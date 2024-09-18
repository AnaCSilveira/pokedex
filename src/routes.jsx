import { createBrowserRouter } from "react-router-dom";
import Pokemon from "./pokemon";
import App from "./App";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pokemon/:id",
    element:  <Pokemon  />,
  },
 


]);

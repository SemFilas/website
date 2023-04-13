import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login";
import Cadastrar from "./Cadastrar";
import App from "./App";
import ConfirmarCompra from "./ConfirmarCompra";
import PedidoRealizado from "./PedidoRealizado";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastrar",
    element: <Cadastrar />,
  },
  {
    path: "/confirmar-compra",
    element: <ConfirmarCompra />,
  },
  {
    path: "/pedido-realizado",
    element: <PedidoRealizado />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

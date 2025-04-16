import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/lista-de-usuarios",
      element: <ListUsers />
    }
  ],
  {
    basename: "/DevClub-Cadastro-Usuarios" // 👈 ESSA LINHA FAZ A MÁGICA
  }
);

export default router;

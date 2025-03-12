import { Route, Routes } from "react-router";
import { HerosRoutes } from "../heros";
import { LoginPage } from "../Auth";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* RUTAS PUBLICAS  */}
        <Route path="login/*" element={
          <PublicRouter>
            <Routes>
              <Route path="/*" element={<LoginPage />} />
            </Routes>

          </PublicRouter>} />

        {/* RUTAS PRIVADAS  */}
        <Route path="/*" element={
          <PrivateRouter>
            <HerosRoutes />
          </PrivateRouter>
        } />
      </Routes>
    </>
  );
};

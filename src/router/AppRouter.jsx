import { Route, Routes } from "react-router";
import { HerosRoutes } from "../heros";
import { LoginPage } from "../Auth";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="/*" element={<HerosRoutes />}></Route>
      </Routes>
    </>
  );
};

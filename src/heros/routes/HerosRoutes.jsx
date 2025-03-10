import { Routes, Route, Navigate } from "react-router";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../../heros";
import { Navbar } from "../../shared";

export const HerosRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />}></Route>
          <Route path="dc" element={<DcPage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="hero/:id" element={<HeroPage />}></Route>
          <Route path="/*" element={<Navigate to="/marvel" />}></Route>
        </Routes>
      </div>
    </>
  );
};

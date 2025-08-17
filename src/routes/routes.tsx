import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColumnPage, MainLayout, MyRecord } from "../components";
import { MainTopPage } from "../modules";
import { COLUMN_PATH, MY_RECORD_PATH } from "./path";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainTopPage />} />
          <Route path={MY_RECORD_PATH} element={<MyRecord />} />
          <Route path={COLUMN_PATH} element={<ColumnPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

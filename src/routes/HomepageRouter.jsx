import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage";
import HomePageLayout from "../layouts/hompage";
import Community from "../pages/community";

function HomepageRouter() {
  return (
    <>
      <Routes>
        <Route element={<HomePageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/community" element={<Community />} />
        </Route>
      </Routes>
    </>
  );
}

export default HomepageRouter;

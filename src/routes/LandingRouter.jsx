import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingpage";
import LandingPageLayout from "../layouts/landingpage";

function LandingRouter() {
  return (
    <>
      <Routes>
        <Route element={<LandingPageLayout />}>
          <Route path="/landing" element={<LandingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default LandingRouter;

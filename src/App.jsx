import { BrowserRouter } from "react-router-dom";
// import Communitypage from "./routes/HomepageRouter";
import HomepageRouter from "./routes/HomepageRouter";
import LandingRouter from "./routes/LandingRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <HomepageRouter />
        <LandingRouter />
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import ReactGA from "react-ga4";
import Layout from "./layouts/layout";
import AboutUs from "./pages/about-us/about-us";
import News from "./pages/news";
import GamingWebsiteDetail from "./pages/gaming-website-detail";
import GamingWebsite from "./sections/homepages/gaming-website";
import GamingWebsitePage from "./pages/list-gaming-website";
const TRACKING_ID = "G-0VH7FMSGB1";
ReactGA.initialize(TRACKING_ID);
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Homepage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="news/:slug" element={<News />} />
          <Route
            path="gaming-websites/:slug"
            element={<GamingWebsiteDetail />}
          />
          <Route path="gaming-websites" element={<GamingWebsitePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import ReactGA from 'react-ga4';
import Layout from './layouts/layout';
import AboutUs from './pages/about-us/about-us';
const TRACKING_ID = "G-0VH7FMSGB1";
ReactGA.initialize(TRACKING_ID);
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Homepage />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
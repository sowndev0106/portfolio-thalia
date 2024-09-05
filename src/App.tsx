import Homepage from './pages/homepage';
import ReactGA from 'react-ga4';
const TRACKING_ID = "G-0VH7FMSGB1";
ReactGA.initialize(TRACKING_ID);
function App() {
  return (
    <Homepage />
  );
}

export default App;
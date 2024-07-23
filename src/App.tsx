import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <iframe
      src="/portfolio-thalia/homepage.pdf#toolbar=0&scrollbar=0&statusbar=0&view=FitH"
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        border: 'none'
      }}
    ></iframe>
  );
}


export default App;
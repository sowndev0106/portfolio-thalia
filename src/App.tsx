import React, { useState, useEffect } from 'react';

function App() {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    // Function to detect mobile device
    const detectMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    // Set the iframe src based on whether the user is on a mobile device
    if (detectMobile()) {
      setIframeSrc('/portfolio-thalia/homepage.pdf#toolbar=0&scrollbar=0&statusbar=0&view=FitH');
    } else {
      alert("This is phone")
      setIframeSrc('/portfolio-thalia/homepage.pdf');
    }
  }, []);

  return (
    <iframe
      src={iframeSrc}
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
      }}
    ></iframe>
  );
}

export default App;
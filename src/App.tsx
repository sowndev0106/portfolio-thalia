import React, { useState, useEffect } from 'react';

function App() {
  const [iframeSrc, setIframeSrc] = useState('');
  const [iframeStyle, setIframeStyle] = useState({});

  useEffect(() => {
    // Function to detect mobile device
    const detectMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    // Set the iframe src and style based on whether the user is on a mobile device
    if (detectMobile()) {
      alert("This is phone");
      setIframeSrc('/portfolio-thalia/homepage.pdf#toolbar=0&scrollbar=0&statusbar=0&view=FitH');
      // Remove styles when on phone
      setIframeStyle({});
    } else {
      setIframeSrc('/portfolio-thalia/homepage.pdf#toolbar=0&scrollbar=0&statusbar=0&view=FitH');
      // Apply styles for non-phone devices
      setIframeStyle({
        width: '100%',
        height: '100vh',
        border: 'none',
      });
    }
  }, []);

  return (
    <iframe
      src={iframeSrc}
      style={iframeStyle}
    ></iframe>
  );
}

export default App;
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
      // Estimate the natural width of the PDF content in pixels
      const pdfNaturalWidth = 1000; // Example value; adjust based on your PDF

      // Get the viewport width
      const viewportWidth = window.innerWidth;

      // Calculate the zoom level as a percentage
      const zoomLevel = (viewportWidth / pdfNaturalWidth) * 100;

      setIframeSrc(`homepage.pdf#toolbar=0&scrollbar=0&statusbar=0&view=FitH&zoom=${zoomLevel}`);
      // Remove styles when on phone
      setIframeStyle({
        width: '100vw',
        height: '100vh',
        border: 'none',
        margin: 0,
      });
      // redirect to the PDF file
      // window.location.href = 'homepage.pdf';

    } else {
      setIframeSrc('homepage.pdf#toolbar=0&scrollbar=0&statusbar=0&view=FitH');
      // Apply styles for non-phone devices
      setIframeStyle({
        width: '100%',
        height: '100vh',
        border: 'none',
        margin: 0,
      });
    }
  }, []);

  return (

    <div style={iframeStyle}>
      <object type="text/html" data={iframeSrc}
        style={iframeStyle}>
      </object>
    </div>
  );
}

export default App;
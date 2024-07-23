import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Increment iframeKey to change the key prop on the iframe, causing it to reload
      setIframeKey((prevKey: any) => prevKey + 1);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, [])
  return (
    <iframe
      key={iframeKey}
      src="/homepage.pdf#toolbar=0&scrollbar=0"
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
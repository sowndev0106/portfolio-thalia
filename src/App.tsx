import React, { useRef } from 'react';
import './App.css';

function App() {
  const iframeRef = useRef<HTMLIFrameElement>(null);


  const removeElements = () => {

  };

  return (
    <iframe
      ref={iframeRef}
      src="https://thaliatran.wixsite.com/home"
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        border: 'none'
      }}
      onLoad={removeElements}
    ></iframe>
  );
}

export default App;
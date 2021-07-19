import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Main from "../Main";
import ImageModal from "../ImageModal";

function App() {
  return (
      <BrowserRouter>
          <Main/>
          <ImageModal/>
      </BrowserRouter>
  );
}

export default App;

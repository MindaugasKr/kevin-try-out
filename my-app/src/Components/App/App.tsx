import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from "../../state/store";
import Main from "../Main";
import ImageModal from "../ImageModal";

function App() {
  return (
      <BrowserRouter>
          <Provider
                store={store}
          >
              <Main/>
              <ImageModal/>
          </Provider>
      </BrowserRouter>
  );
}

export default App;

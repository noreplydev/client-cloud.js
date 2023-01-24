import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import GlobalStyle from "./style";
import { Explore } from "./pages/explore/explore.jsx";
import { DownloadProvider } from "./context/downloadContext.js";

function App() {
  return (
    <DownloadProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Explore/>}/>
        </Routes>
      </BrowserRouter>
    </DownloadProvider> 
  );
}

export default App;

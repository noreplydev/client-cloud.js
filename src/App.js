import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import GlobalStyle from "./style";
import { Explore } from "./pages/explore/explore.jsx";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Explore/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

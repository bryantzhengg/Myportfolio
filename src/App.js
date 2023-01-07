import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Myportfolio from "./routes/Myportfolio";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/home" element={<Home/>}  />
      <Route path="/myportfolio" element={<Myportfolio/>}  />
    </Routes>
    </>
  );
}

export default App;
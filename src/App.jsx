import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import AttackTypeList from "./components/AttackTypeList";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <div className="main-body pt-16 px-4 ">
          <AttackTypeList />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;

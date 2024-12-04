import React, { useState } from "react";
// import CounterApp from "./Components/CounterApp";
// import ImageApp from "./Components/ImageApp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Login from "./Components/Login";
import Registration from "./Components/Registration";

function App() {
  const [store, setStore] = useState("");
  return (
    <div>
      {JSON.stringify(store)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/registration"
            element={<Registration regData={setStore} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LogInScreen from "./pages/LogInScreen";
import SignInScreen from "./pages/SignInScreen";
import MainScreen from "./pages/MainScreen";
import GameScreen from "./pages/GameScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen/>}/>
        <Route path="LoginScreen" element={<LogInScreen/>}/>
        <Route path="MainScreen" element={<MainScreen/>}/>
        <Route path="SignInScreen" element={<SignInScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

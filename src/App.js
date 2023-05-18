import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LogInScreen from "./components/LogInScreen";
import SignInScreen from "./components/SignInScreen";
import MainScreen from "./components/MainScreen";
import GameScreen from "./components/GameScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInScreen/>}/>
        <Route path="SignInScreen" element={<SignInScreen/>}/>
        <Route path="MainScreen" element={<MainScreen/>}/>
        <Route path="LoginScreen" element={<LogInScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInScreen from "./pages/LogIn";
import SignInScreen from "./pages/SignIn";
import MainScreen from "./pages/Main";
import GameScreen from "./pages/Game";
import MyPageScreen from "./pages/MyPage";
import CommunityScreen from "./pages/Community";
import Tetris from "./pages/Tetris";
import Error from "./pages/Error";
import MadeGame from "./pages/MadeGame";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainScreen />,
        errorElement: <Error />,
    },
    {
        path: "/SignInScreen",
        element: <SignInScreen />,
    },
    {
        path: "/LogInScreen",
        element: <LogInScreen />,
    },
    {
        path: "/GameScreen",
        element: <GameScreen />,
    },
    {
        path: "/GameScreen/:id",
        element: <GameScreen />,
    },
    {
        path: "/MadeGameScreen/:id",
        element: <MadeGame />,
    },
    {
        path: "/MainScreen",
        element: <MainScreen />,
    },
    {
        path: "/MyPageScreen",
        element: <MyPageScreen />,
    },
    {
        path: "/CommunityScreen",
        element: <CommunityScreen />,
    },
    {
        path: "/Tetris",
        element: <Tetris />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

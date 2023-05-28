import { useEffect } from "react";

export default function Tetris() {
    useEffect(() => {
        window.location.href = "/tetris.html";
    }, []);

    return null;
}

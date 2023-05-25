// @ts-nocheck
import React, { useEffect, useRef } from "react";

const RufflePlayer = ({ swfUrl }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const loadRufflePlayer = async () => {
            const { RufflePlayer } = window;
            const ruffle = RufflePlayer.newest();
            const container = containerRef.current;
            const player = ruffle.createPlayer();

            if (container) {
                let isPlayer = container.querySelector("ruffle-player");
                if (!isPlayer) {
                    container.appendChild(player);
                }
                try {
                    await player.load(swfUrl);
                    console.info("Ruffle successfully loaded the file");
                } catch (e) {
                    console.error(`Ruffle failed to load the file: ${e}`);
                }
            }
        };

        loadScript("https://unpkg.com/@ruffle-rs/ruffle", loadRufflePlayer);
    }, [swfUrl]);

    const loadScript = (url, callback) => {
        // Check if the script is already loaded
        if (document.querySelector(`script[src="${url}"]`)) {
            callback();
            return;
        }
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.onload = callback;
        document.body.appendChild(script);
    };

    return <div id="container" ref={containerRef} />;
};

export default RufflePlayer;

import React, { useState } from "react";
// import sabersound1 from "./sabersound1.mp3";
import sabersound2 from "./sabersound2.mp3";
import useSound from 'use-sound';



export default function Scrollbar() {
    const [play, { stop }] = useSound(sabersound2, {volume: 0.10});
    const [isOff, setIsOff] = useState(true);
    const toplay = () => play();
    const tostop = () => stop();

    window.onscroll = suonoscrolling;
    
    function suonoscrolling() {
        if (isOff) {
            toplay();
        } else {
            tostop();
        }
    };

    return (
        <div>

        </div>
    );
}


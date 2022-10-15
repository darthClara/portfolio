import React, { useState } from "react";
import "./Music.scss"
import music from "./music.mp3";
import useSound from 'use-sound';

export default function Music() {

    const [play, { stop }] = useSound(music, {volume: 0.30});
    const [isOff, setIsOff] = useState(true);
    const toplay = () => play();
    const tostop = () => stop();

    function gestoreClick() {
        if (isOff) {
            toplay();
            setIsOff(!isOff);
        } else {
            tostop();
            setIsOff(!isOff); 
        }
    };

    return (
            <button className="bottonevolume" onClick={gestoreClick}>  
                {isOff
                    ?
                    <div className="novolume">
                    </div>
                    :
                    <div className="yesvolume">
                    </div>}
            </button>
    );
}
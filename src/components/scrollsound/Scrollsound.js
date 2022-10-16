import React from "react";
import sabersound from "./sabersound2.mp3";
import useSound from 'use-sound';

export default function Scrollsound() {
    const [play, { stop }] = useSound(sabersound, {volume: 0.1}, {playbackRate: 1});

    window.onscroll = play;
    
    return (
        <div>

        </div>
    );
}


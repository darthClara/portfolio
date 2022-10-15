import React, { useState } from "react";
// import sabersound1 from "./sabersound1.mp3";
import sabersound2 from "./sabersound2.mp3";
import useSound from 'use-sound';

export default function Scrollsound() {
    const [play, { stop }] = useSound(sabersound2, {volume: 0.10});

    window.onscroll = play;
    
    return (
        <div>

        </div>
    );
}


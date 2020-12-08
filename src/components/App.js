import React from 'react';

import {useBundle, useInterface} from '../libs/Hooks';

import Container from './Container';

import Colorama from '../utils/Colorama';
import ColorMode from '../utils/ColorMode';

function App() {
    const [hexcode, setHexCode, hexcodeBundle] = useBundle("DC143C", "hexcode", "setHexCode");
    const [color, setColor, colorBundle] = useBundle(Colorama.HextoRGB(hexcode), "color", "setColor");
    const [mode, setMode, modeBundle] = useBundle({prev: "RGB", now: "RGB"}, "mode", "setMode");

    const style = {
        background: `#${hexcode}`
    };

    useInterface(
        _ => {
            setColor(ColorMode.multiTool(Colorama.HextoRGB(hexcode), "RGB", mode.now));
        },
        _ => {
            setHexCode(Colorama.RGBtoHex(ColorMode.multiTool(color, mode.now, "RGB")));
        }, 
        [hexcode, color]
    );

    return (
        <div id="app" className="flexbox full-item" style={style}>
            <Container
                hexcodeBundle={hexcodeBundle}
                colorBundle={colorBundle}
                modeBundle={modeBundle}
            />
        </div>
    );
}

export default App;
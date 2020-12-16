import {React, useState} from 'react';

import {useInterface} from '../libs/Hooks';

import Container from './Container';

import Colorama from '../utils/Colorama';
import ColorMode from '../utils/ColorMode';

function App({colorProp}) {
    const [hexcode, setHexCode] = useState(colorProp.toHex());
    const [color, setColor] = useState(Colorama.HextoRGB(hexcode));
    const [mode, setMode] = useState({prev: "RGB", now: "RGB"});

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
                hexcodeBundle={{hexcode, setHexCode}}
                colorBundle={{color, setColor}}
                modeBundle={{mode, setMode}}
            />
        </div>
    );
}

export default App;
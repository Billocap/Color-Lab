import {React, useReducer, useEffect} from 'react';

import Slider from './Slider';

import {useInterface} from '../../libs/Hooks';

import ColorMode from '../../utils/ColorMode';
import Colorama from '../../utils/Colorama';

const colorReducer = (state, action) => {
    switch(action.type) {
        case "red":
            return {...state, x: action.value};
        case "green":
            return {...state, y: action.value};
        case "blue":
            return {...state, z: action.value};
        case "all":
            return action.value;
        default:
            return state;
    }
};

function Sliders({color, setColor, mode}) {
    const [sliders, setSliders] = useReducer(colorReducer, color);

    useInterface(
        _ => {
            setColor(sliders);
        },
        _ => {
            setSliders({type: "all", value: color});
        },
        [sliders, color]
    );

    useEffect( _ => {
        setSliders({type: "all", value: ColorMode.multiTool(sliders , mode.prev, mode.now)});
    }, [mode]);

    return (
        <div id="sliders" className="flexbox">
            <Slider
                id="red"
                label={mode.now[0]}
                mode={mode}
                value={sliders.x}
                handler={value => setSliders({type: "red", value: value})}
                background={Colorama.ModeGrad("red", mode.now, sliders.y, sliders.z)}
            />
            <Slider
                id="green"
                label={mode.now[1]}
                mode={mode}
                value={sliders.y}
                handler={value => setSliders({type: "green", value: value})}
                background={Colorama.ModeGrad("green", mode.now, sliders.x, sliders.z)}
            />
            <Slider
                id="blue"
                label={mode.now[2]}
                mode={mode}
                value={sliders.z}
                handler={value => setSliders({type: "blue", value: value})}
                background={Colorama.ModeGrad("blue", mode.now, sliders.x, sliders.y)}
            />
        </div>
    );
}

export default Sliders;
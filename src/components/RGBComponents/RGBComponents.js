import {React, useReducer} from 'react';

import {useInterface} from '../../libs/Hooks';

import Component from './Component';
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

function RGBComponent({hexcode, setHexCode}) {
    const [color, setColor] = useReducer(colorReducer, Colorama.HextoRGB(hexcode));

    useInterface( 
        _ => {
            setHexCode(Colorama.RGBtoHex(color));
        },
        _ => {
            setColor({type: "all", value: Colorama.HextoRGB(hexcode)});
        },
        [color, hexcode]
    );

    return (
        <div id="components" className="flexbox">
            <Component
                id="red"
                value={color.x}
                handler={value => setColor({type: "red", value: value})}
                background={Colorama.rgb(color.x,0,0)}
            />
            <Component
                id="green"
                value={color.y}
                handler={value => setColor({type: "green", value: value})}
                background={Colorama.rgb(0,color.y,0)}
            />
            <Component
                id="blue"
                value={color.z}
                handler={value => setColor({type: "blue", value: value})}
                background={Colorama.rgb(0,0,color.z)}
            />
        </div>
    );
}

export default RGBComponent;
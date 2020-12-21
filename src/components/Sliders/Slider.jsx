import {React, useState, useEffect} from 'react';

import {useInterface} from '../../libs/Hooks';
import Colorama from '../../utils/Colorama';


function Slider({channel, label, color, setColor}) {
    const [slider, setSlider] = useState(color.getColor(channel));
    const [range, setRange] = useState({min: 0, max: 255});

    const style = {
        background: Colorama.ModeGrad(
            channel,
            color.mode,
            color.getColor(channel === "x" ? "y" : "x"),
            color.getColor(channel === "z" ? "y" : "z")
        )
    };

    useInterface(
        _ => {
            setSlider(color.getColor(channel));
        },
        _ => {
            setColor(color => ({...color.setColor(slider, channel)}));
        },
        [color, slider]
    );

    useEffect( _ => {
        if (color.mode === "RGB") {
            setRange({min: 0, max: 255});
        } else {
            if (label === "H") {
                setRange({min: 0, max: 360});
            } else {
                setRange({min: 0, max: 100});
            }
        }
    }, [color, label]);

    return (
        <div className="flexbox full-item">
            <label htmlFor={channel} className="flexbox">
                {label}
            </label>
            <input
                type="range"
                id={channel}
                value={slider}
                onChange={e => setSlider(parseInt(e.target.value))}
                min={range.min}
                max={range.max}
                style={style}
            />
            <input
                type="text"
                value={slider || 0}
                onChange={e => setSlider(parseInt(e.target.value) || 0)}
            />
        </div>
    );
}

export default Slider;
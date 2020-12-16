import {React, useState, useEffect} from 'react';

import {useInterface} from '../../libs/Hooks';

function Slider({id, label, value, handler, mode, background}) {
    const [slider, setSlider] = useState(value);
    const [range, setRange] = useState({min: 0, max: 255});

    const style = {
        background
    };

    useInterface(
        _ => {
            setSlider(value);
        },
        _ => {
            handler(slider);
        },
        [value, slider]
    );

    useEffect( _ => {
        if (mode.now === "RGB") {
            setRange({min: 0, max: 255});
        } else {
            if (label === "H") {
                setRange({min: 0, max: 360});
            } else {
                setRange({min: 0, max: 100});
            }
        }
    }, [mode, label]);

    return (
        <div className="flexbox full-item">
            <label htmlFor={id} className="flexbox">
                {label}
            </label>
            <input
                type="range"
                id={id}
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
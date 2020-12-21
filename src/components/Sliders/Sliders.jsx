import React from 'react';

import Slider from './Slider';

function Sliders({bundle}) {
    return (
        <div id="sliders" className="flexbox">
            <Slider channel="x" label={bundle.color.mode[0]} {...bundle} />
            <Slider channel="y" label={bundle.color.mode[1]} {...bundle} />
            <Slider channel="z" label={bundle.color.mode[2]} {...bundle} />
        </div>
    );
}

export default Sliders;
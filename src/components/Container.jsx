import React from 'react';

import Display from './Display/Display';
import Sliders from './Sliders/Sliders';
import RGBComponents from './RGBComponents/RGBComponents'
import ModeButtons from './ModeButtons/ModeButtons';

function Container({bundle}) {
    return (
        <div id="container" className="flexbox">
            <Display {...bundle} />
            <Sliders bundle={bundle} />
            <RGBComponents bundle={bundle} />
            <ModeButtons bundle={bundle} />
        </div>
    );
}

export default Container;
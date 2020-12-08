import React from 'react';

import Display from './Display/Display';
import Sliders from './Sliders/Sliders';
import RGBComponents from './RGBComponents/RGBComponents'
import ModeButtons from './ModeButtons/ModeButtons';

function Container({hexcodeBundle, colorBundle, modeBundle}) {
    return (
        <div id="container" className="flexbox">
            <Display {...hexcodeBundle} />
            <Sliders {...colorBundle} {...modeBundle} />
            <RGBComponents {...hexcodeBundle} />
            <ModeButtons bundle={modeBundle} />
        </div>
    );
}

export default Container;
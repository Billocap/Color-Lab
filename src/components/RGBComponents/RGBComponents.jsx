import React from 'react';

import Component from './Component';

import Colorama from '../../utils/Colorama';

function RGBComponent({bundle}) {
    const {color} = bundle;
    const {rgb} = Colorama;

    return (
        <div id="components" className="flexbox">
            <Component channel="x" {...bundle} background={rgb(color.asMode("RGB")["x"],0,0)} />
            <Component channel="y" {...bundle} background={rgb(0,color.asMode("RGB")["y"],0)} />
            <Component channel="z" {...bundle} background={rgb(0,0,color.asMode("RGB")["z"])} />
        </div>
    );
}

export default RGBComponent;
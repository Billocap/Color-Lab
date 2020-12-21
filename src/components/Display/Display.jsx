import React from 'react';

import HexCode from './HexCode';

function Display({color, setColor}) {
    const style = {
        background: `#${color.toHex()}`
    };

    return (
        <div id="display" className="flexbox" style={style}>
            <HexCode color={color} setColor={setColor} />
        </div>
    );
}

export default Display;
import React from 'react';

import HexCode from './HexCode';

function Display({hexcode, setHexCode}) {
    const style = {
        background: `#${hexcode}`
    };

    return (
        <div id="display" className="flexbox" style={style}>
            <HexCode value={hexcode} handler={setHexCode} />
        </div>
    );
}

export default Display;
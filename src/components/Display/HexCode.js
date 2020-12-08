import {React, useState} from 'react';

import {useInterface} from '../../libs/Hooks';

function HexCode({value, handler}) {
    const [hexcode, setHexCode] = useState(value);

    useInterface(
        _ => {
            setHexCode(value);
        },
        _ => {
            if (hexcode.length >= 6) {
                handler(hexcode);
            }
        },
        [value, hexcode]
    );

    return (
        <div>
            #
            <input
                type="text"
                id="hexcode"
                value={hexcode}
                onChange={e => setHexCode(e.target.value.slice(0,6).toUpperCase())}
            />
        </div>
    );
}

export default HexCode;
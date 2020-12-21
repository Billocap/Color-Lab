import {React, useState} from 'react';

import {useInterface} from '../../libs/Hooks';

function HexCode({color, setColor}) {
    const [hexcode, setHexCode] = useState(color.toHex());

    useInterface(
        _ => {
            setHexCode(color.toHex());
        },
        _ => {
            if (hexcode.length >= 6) setColor(color => ({...color.fromHex(hexcode)}));
        },
        [color, hexcode]
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
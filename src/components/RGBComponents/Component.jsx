import {React, useState} from 'react';

import {useInterface} from '../../libs/Hooks';

function Component({channel, color, setColor, background}) {
    const [component, setComponent] = useState(color.asMode("RGB")[channel]);
    
    useInterface(
        _ => {
            setColor(color_ => ({...color_.setColor(component, channel, "RGB")}));
        },
        _ => {
            setComponent(color.asMode("RGB")[channel] || 0);
        },
        [component, color]
    );

    const style = {
        background: background
    }

    return (
        <input
            type="text"
            className="full-item"
            value={component}
            onChange={e => setComponent(parseInt(e.target.value) || 0)}
            style={style}
        />
    );
}

export default Component;
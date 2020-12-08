import {React, useState} from 'react';

import {useInterface} from '../../libs/Hooks';

function Component({id, value, handler, background}) {
    const [component, setComponent] = useState(value) 
    
    useInterface(
        _ => {
            handler(component);
        },
        _ => {
            setComponent(value || 0);
        },
        [component, value]
    );

    const style = {
        background
    }

    return (
        <input
            type="text"
            id={id}
            className="full-item"
            value={component}
            onChange={e => setComponent(parseInt(e.target.value) || 0)}
            style={style}
        />
    );
}

export default Component;
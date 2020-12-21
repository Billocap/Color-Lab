import {React, useState} from 'react';

import Container from './Container';

import Color from '../libs/Color';

function App() {
    const [color, setColor] = useState(Color(220, 20, 60));

    const style = {
        background: `#${color.toHex()}`
    };

    return (
        <div id="app" className="flexbox full-item" style={style}>
            <Container bundle={{color, setColor}} />
        </div>
    );
}

export default App;
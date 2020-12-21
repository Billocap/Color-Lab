import React from 'react';

import ModeButton from './ModeButton';

function ModeButtons({bundle}) {
    return (
        <div id="mode" className="flexbox">
            <ModeButton value="RGB" {...bundle} />
            <ModeButton value="HSL" {...bundle} />
            <ModeButton value="HSV" {...bundle} />
        </div>
    );
}

export default ModeButtons;
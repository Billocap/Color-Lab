import React from 'react';

function ModeButton({value, mode, setMode}) {
    return (
        <button 
            className={`full-item ${mode.now === value ? "is-selected" : ""}`}
            onClick={ _ => {setMode({prev: mode.now, now: value})}}
        >
            {value}
        </button>
    );
}

export default ModeButton;
import React from 'react';

function ModeButton({value, color, setColor}) {
    return (
        <button 
            className={`full-item ${color.mode === value ? "is-selected" : ""}`}
            onClick={ _ => {setColor(color => ({...color.setMode(value)}))}}
        >
            {value}
        </button>
    );
}

export default ModeButton;
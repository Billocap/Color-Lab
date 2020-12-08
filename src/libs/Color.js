"use strict";

class Color {
    constructor() {
        this.mode = "RGB";

        if (arguments.length === 3) {
            this.x = arguments[0];
            this.y = arguments[1];
            this.z = arguments[2];
        } else if (arguments.length === 1) {
            const toInt = val=> (parseInt(val, 16) || 0);
    
            this.x = toInt(arguments[0].slice(0,2));
            this.y = toInt(arguments[0].slice(2,4));
            this.z = toInt(arguments[0].slice(4,6));
        }
    }

    static isColor(arg) {
        return arg instanceof Color;
    }

    toHex() {
        const strClamp = str => (`0${str}`).slice(-2);
        const hexStr = val => (val).toString(16).toUpperCase();

        return (
            strClamp(hexStr(this.x)) + 
            strClamp(hexStr(this.y)) + 
            strClamp(hexStr(this.z))
        );
    }

    fromHex(code) {
        const toInt = val => (parseInt(val, 16) || 0);

        this.x = toInt(code.slice(0,2));
        this.y = toInt(code.slice(2,4));
        this.z = toInt(code.slice(4,6));
    }
}

export default Color;
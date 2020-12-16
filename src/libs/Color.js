import ColorMode from '../utils/ColorMode';
import {RGBtoHex, HextoRGB} from '../utils/Colorama';

class Color {
    constructor() {
        this.mode = "RGB";

        if (arguments.length === 3) {
            const [x, y, z] = arguments;

            this.color = {x, y, z};
        } else if (arguments.length === 1) {
            this.color = HextoRGB(arguments[0]);
        }
    }

    static isColor(arg) {
        return arg instanceof Color;
    }

    toHex() {
        this.setMode("RGB");

        return RGBtoHex(this.color);
    }

    fromHex(code) {
        this.color = ColorMode.multiTool(HextoRGB(code), "RGB", this.mode);
    }

    setMode(mode) {
        this.color = ColorMode.multiTool(this.color, this.mode, mode);

        this.mode = mode;
    }

    asMode(mode) {
        return ColorMode.multiTool(this.color, this.mode, mode);
    }

    getColor(channel = undefined) {
        return channel ? this.color[channel] : this.color;
    }
}

export default Color;
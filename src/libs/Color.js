import ColorMode from '../utils/ColorMode';
import {RGBtoHex, HextoRGB} from '../utils/Colorama';

function Color() {
    var _color;

    if (arguments.length === 3) {
        const [x, y, z] = arguments;

        _color = {x, y, z};
    } else if (arguments.length === 1) {
        _color = HextoRGB(arguments[0]);
    } else {
        _color = {x:0, y:0, z:0};
    }

    return {
        mode: "RGB",
        color: _color,
        asMode(mode) {
            return ColorMode.multiTool(this.color, this.mode, mode);
        },
        setMode(mode) {
            this.color = ColorMode.multiTool(this.color, this.mode, mode);

            this.mode = mode;

            return this;
        },
        setColor(value, channel = undefined, mode = undefined) {
            if (channel) {
                if (mode) {
                    const color = {...this.asMode(mode)};

                    color[channel] = value;

                    this.color[channel] = ColorMode.multiTool(color, mode, this.mode)[channel];
                } else {
                    this.color[channel] = value;
                }
            } else {
                this.color = value;
            }

            return this;
        },
        getColor(channel = undefined) {
            return channel ? this.color[channel] : this.color;
        },
        toHex() {
            return RGBtoHex(this.asMode("RGB"));
        },
        fromHex(code) {
            this.color = ColorMode.multiTool(HextoRGB(code), "RGB", this.mode);

            return this;
        }
    };
}

export default Color;
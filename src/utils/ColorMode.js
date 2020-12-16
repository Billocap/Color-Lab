// Treats color as a vector with x, y, z coords;
// x = r, y = g, z = b For RGB;
// x = h, y = s, z = l For HSL;
// x = h, y = s, z = v For HSV;
const ColorMode = {
    HSLtoRGB({x, y, z}) {
        const lit = z / 100;
        const sat = y / 100;

        const c = sat * (1 - Math.abs(2 * lit - 1));
        const m = lit - (c / 2);

        const hPrime = x / 60;
        const X = c * (1 - Math.abs((hPrime % 2) - 1));

        var iniVals = [c, 0, X];

        if (0 <= hPrime && hPrime < 1) {
            iniVals = [c, X, 0];
        } else if (1 <= hPrime && hPrime < 2) {
            iniVals = [X, c, 0];
        } else if (2 <= hPrime && hPrime < 3) {
            iniVals = [0, c, X];
        } else if (3 <= hPrime && hPrime < 4) {
            iniVals = [0, X, c];
        } else if (4 <= hPrime && hPrime < 5) {
            iniVals = [X, 0, c];
        } else if (5 <= hPrime && hPrime < 6) {
            iniVals = [c, 0, X];
        }

        return {
            x: Math.round((iniVals[0] + m) * 255),
            y: Math.round((iniVals[1] + m) * 255),
            z: Math.round((iniVals[2] + m) * 255)
        }
    },
    HSVtoRGB({x, y, z}) {
        const val = z / 100;
        const sat = y / 100;

        const c = val * sat;
        const m = val - c;

        const hPrime = x / 60;
        const X = c * (1 - Math.abs((hPrime % 2) - 1));

        var iniVals = [c,0,X];

        if (0 <= hPrime && hPrime < 1) {
            iniVals = [c, X, 0];
        } else if (1 <= hPrime && hPrime < 2) {
            iniVals = [X, c, 0];
        } else if (2 <= hPrime && hPrime < 3) {
            iniVals = [0, c, X];
        } else if (3 <= hPrime && hPrime < 4) {
            iniVals = [0, X, c];
        } else if (4 <= hPrime && hPrime < 5) {
            iniVals = [X, 0, c];
        } else if (5 <= hPrime && hPrime < 6) {
            iniVals = [c, 0, X];
        }

        return {
            x: Math.round((iniVals[0] + m) * 255),
            y: Math.round((iniVals[1] + m) * 255),
            z: Math.round((iniVals[2] + m) * 255)
        }
    },
    RGBtoHSL({x, y, z}) {
        let red = x / 255;
        let green = y / 255;
        let blue = z / 255;

        const cmax = Math.max(red, green, blue);
        const cmin = Math.min(red, green, blue);

        const diff = cmax - cmin;
        const lit = (cmax + cmin) / 2;
        const sat  = lit === 0 || lit === 1 ? 0 : (2 * (cmax - lit)) / (1 - Math.abs(2 * lit - 1));

        let hue = 0;

        switch (cmax) {
            case cmin:
                hue = 0;
                break;
            case red:
                hue = (60 * ((green - blue) / diff) + 360) % 360;
                break;
            case green:
                hue = (60 * ((blue - red) / diff) + 120) % 360;
                break;
            case blue:
                hue = (60 * ((red - green) / diff) + 240) % 360;
                break;
            default:
                hue = 0;
        }

        return {
            x: Math.round(hue < 0 ? 0 : hue),
            y: Math.round(sat * 100),
            z: Math.round(lit * 100)
        };
    },
    RGBtoHSV({x, y, z}) {
        let red = x / 255;
        let green = y / 255;
        let blue = z / 255;

        const cmax = Math.max(red, green, blue);
        const cmin = Math.min(red, green, blue);

        const diff= cmax - cmin;
        const sat = cmax <= 0 ? 0 : diff / cmax;

        let hue = 0;

        switch (cmax) {
            case cmin:
                hue = 0;
                break;
            case red:
                hue = (60 * ((green - blue) / diff) + 360) % 360;
                break;
            case green:
                hue = (60 * ((blue - red) / diff) + 120) % 360;
                break;
            case blue:
                hue = (60 * ((red - green) / diff) + 240) % 360;
                break;
            default:
                hue = 0;
        }

        return {
            x: Math.round(hue < 0 ? 0 : hue),
            y: Math.round(sat * 100),
            z: Math.round(cmax * 100)
        };
    },
    HSVtoHSL({x, y, z}) {
        const sat = y / 100;
        const val = z / 100;

        const lit = val * (1 - sat / 2);

        const lst = lit === 1 || lit === 0 ? 0 : (val - lit) / Math.min(lit, 1 - lit);

        return {
            x: x,
            y: Math.round(lst * 100),
            z: Math.round(lit * 100)
        };
    },
    HSLtoHSV({x, y, z}) {
        const lst = y / 100;
        const lit = z / 100;

        const val = lit + lst * Math.min(lit, 1 - lit);
        const sat = val === 0 ? 0 : 2 * (1 - lit / val);

        return {
            x: x,
            y: Math.round(sat * 100),
            z: Math.round(val * 100)
        };
    },
    multiTool(color, from, to) {
        if (from !== to) {
            switch (from) {
                case "RGB":
                    return to === "HSV" ? this.RGBtoHSV(color) : this.RGBtoHSL(color);
                case "HSL":
                    return to === "RGB" ? this.HSLtoRGB(color) : this.HSLtoHSV(color);
                case "HSV":
                    return to === "RGB" ? this.HSVtoRGB(color) : this.HSVtoHSL(color);
                default:
                    return color;
            }
        } else {
            return color;
        }
    }
};

export default ColorMode;
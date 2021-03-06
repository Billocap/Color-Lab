import ColorMode from './ColorMode';

function RGBtoHex({x, y, z}) {
    return (
        ("0" + x.toString(16).toUpperCase()).slice(-2) + 
        ("0" + y.toString(16).toUpperCase()).slice(-2) + 
        ("0" + z.toString(16).toUpperCase()).slice(-2)
    );
}

function HextoRGB(code) {
    return {
        x: (parseInt(code.slice(0,2), 16) || 0),
        y: (parseInt(code.slice(2,4), 16) || 0),
        z: (parseInt(code.slice(4,6), 16) || 0)
    }
}

const Colorama = {
    RGBtoHex,
    HextoRGB,
    rgb(r, g, b) {
        return `rgb(${r}, ${g}, ${b})`;
    },
    hsl(h, s, l) {
        if (arguments.length === 3) {
            return `hsl(${h}, ${s}%, ${l}%)`;
        } else if(arguments.length === 1) {
            const {x, y, z} = h;

            return `hsl(${x}, ${y}%, ${z}%)`;
        }
    },
    hsv(h, s, v) {
        var color = this.HSVtoRGB({x:h, y:s, z:v});

        return this.rgb(color.x, color.y, color.z);
    },
    RGBGrad(channel, color1, color2) {
        switch (channel) {
            case "x":
                return `linear-gradient(to right, ${this.rgb(0,color1,color2)}, ${this.rgb(255,color1,color2)})`;
            case "y":
                return `linear-gradient(to right, ${this.rgb(color1,0,color2)}, ${this.rgb(color1,255,color2)})`;
            case "z":
                return `linear-gradient(to right, ${this.rgb(color1,color2,0)}, ${this.rgb(color1,color2,255)})`;
            default:
                return "linear-gradient(to right,0,0)";
        }
    },
    HSLGrad(channel, color1, color2) {
        switch (channel) {
            case "x":
                return `linear-gradient(to right, ${this.hsl(0,color1,color2)}, ${this.hsl(60,color1,color2)}, ${this.hsl(120,color1,color2)}, ${this.hsl(180,color1,color2)}, ${this.hsl(240,color1,color2)}, ${this.hsl(300,color1,color2)}, ${this.hsl(360,color1,color2)})`;
            case "y":
                return `linear-gradient(to right, ${this.hsl(color1,0,color2)}, ${this.hsl(color1,100,color2)})`;
            case "z":
                return `linear-gradient(to right, ${this.hsl(color1,color2,0)}, ${this.hsl(color1,color2,50)}, ${this.hsl(color1,color2,100)})`;
            default:
                return "linear-gradient(to right,0,0)";
        }
    },
    HSVGrad(channel, color1, color2) {
        const {HSVtoHSL} = ColorMode;

        switch (channel) {
            case "x":
                return `linear-gradient(to right, ${this.hsl(HSVtoHSL({x:0,y:color1,z:color2}))}, ${this.hsl(HSVtoHSL({x:60,y:color1,z:color2}))}, ${this.hsl(HSVtoHSL({x:120,y:color1,z:color2}))}, ${this.hsl(HSVtoHSL({x:180,y:color1,z:color2}))}, ${this.hsl(HSVtoHSL({x:240,y:color1,z:color2}))}, ${this.hsl(HSVtoHSL({x:300,y:color1,z:color2}))}, ${this.hsl(HSVtoHSL({x:360,y:color1,z:color2}))})`;
            case "y":
                return `linear-gradient(to right, ${this.hsl(HSVtoHSL({x:color1,y:0,z:color2}))}, ${this.hsl(HSVtoHSL({x:color1,y:100,z:color2}))})`;
            case "z":
                return `linear-gradient(to right, ${this.hsl(HSVtoHSL({x:color1,y:color2,z:0}))}, ${this.hsl(HSVtoHSL({x:color1,y:color2,z:100}))})`;
            default:
                return "linear-gradient(to right,0,0)";
        }
    },
    ModeGrad(channel, mode, color1, color2) {
        switch(mode) {
            case "RGB":
                return this.RGBGrad(channel, color1, color2);
            case "HSL":
                return this.HSLGrad(channel, color1, color2);
            case "HSV":
                return this.HSVGrad(channel, color1, color2);
            default:
                return "linear-gradient(to right,0,0)";
        }
    }
};

export default Colorama;

export {RGBtoHex, HextoRGB};
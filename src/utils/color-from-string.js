import createColor from "create-color";
import { LightenDarkenColor } from 'lighten-darken-color'; 

export default function generateColor(string){
    let color = createColor(string);
    return LightenDarkenColor(color, 20)
}

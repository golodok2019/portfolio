import {theme} from "./Theme";

type FontPropsType = {
    FMin?: number  //Minimal font size
    FMax?: number //Maximal font size
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
}

export const font = ({family, weight, color, lineHeight, FMin, FMax}: FontPropsType) => `
    font-family: ${family || "Montserrat"};
    font-weight: ${weight || 400};
    color: ${color || theme.darkTheme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: min( calc( (100vw - 360px)/(1440 - 360) * (${FMax} - ${FMin}) + ${FMin}px ), ${FMax}px);
`
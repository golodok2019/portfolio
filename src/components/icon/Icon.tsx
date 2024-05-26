import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (

        <svg width={props.width || "39"} height={props.height || "38"} viewBox={props.viewBox || "0 0 39 38"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>

    );
};

export const IconGit = () => {
    return <svg width={"39"} height={"38"} viewBox={"0 0 39 38"}
         fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`Vector`}/>
    </svg>
}
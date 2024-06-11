import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {S} from "./FooterLinkItem_Styles";

type FooterItemPropsType = {
    iconId: string
    caption: string
    viewBox?: string
}

export const FooterLinkItem: React.FC<FooterItemPropsType> = (props: FooterItemPropsType) => {
    return (
        <li>
            <S.FooterLink>
                <Icon iconId={props.iconId} viewBox={props.viewBox}/>
                <S.Caption>{props.caption}</S.Caption>
            </S.FooterLink>
        </li>
    );
};

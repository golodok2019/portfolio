import React from 'react';
import {FlexContainer} from '../../components/FlexContainer';
import {FooterLinkItem} from "./footerItem/FooterLinkItem";
import {S} from "./Footer_Styles";

const footerItemData = [
    {
        iconId: "linkedInDarkTheme",
        caption: "linkedin"
    },
    {
        iconId: "mail",
        caption: "mail"
    },
    {
        iconId: "gitHubDarkTheme",
        caption: "github",
        viewBox: "0 -3 38 38"
    }
]

export const Footer: React.FC = () => {
    return (
        <S.StyledFooter>
            <FlexContainer direction={"column"} alignItems={"center"}>
                <S.Name>Aliaksei Holad</S.Name>
                <S.FooterLinkItemsList>
                    {footerItemData.map((footerItem, index) => {
                        return <FooterLinkItem key={index} iconId={footerItem.iconId} caption={footerItem.caption}
                                               viewBox={footerItem.viewBox}/>
                    })}
                </S.FooterLinkItemsList>
                <S.Copyright>© 2024 Aliaksei Holad, all rights reserved.</S.Copyright>
            </FlexContainer>
        </S.StyledFooter>
    );
};

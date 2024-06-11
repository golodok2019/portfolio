import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "./Skills_Styles";

type SkillPropsType = {
    iconId: string
    skillTitle: string
    viewBox?: string
    firstElement?: boolean
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.StyledSkill>
            <Icon iconId={props.iconId} width={"120px"} height={"120px"} viewBox={props.viewBox || "0 0 120 120"}/>
            <S.SkillTitle>{props.skillTitle}</S.SkillTitle>
        </S.StyledSkill>
    );
};

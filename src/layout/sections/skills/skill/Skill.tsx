import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    skillTitle: string
    viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={"120px"} height={"120px"} viewBox={props.viewBox || "0 0 120 120"}/>
            <SkillTitle>{props.skillTitle}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20%;
`

const SkillTitle = styled.h3`
`
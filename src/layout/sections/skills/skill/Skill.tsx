import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    skillTitle: string
    viewBox?: string
    firstElement?: boolean
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
  margin: 0 auto;
`

const SkillTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  text-transform: uppercase;
  margin-top: 0.5em;
  letter-spacing: 0.13em;
  text-align: center;

`
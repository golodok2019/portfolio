import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {font} from "../../../../styles/Common";

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
  flex-grow: 1;
  height: min( calc( (100vw - 360px)/(1440 - 360) * (164 - 120) + 120px ), 164px);
  width:  min( calc( (100vw - 360px)/(1440 - 360) * (120 - 88) + 88px ), 120px);
`

const SkillTitle = styled.h3`
  ${font({weight: 400, FMin: 12, FMax: 16})}
  line-height: 1.5em;
  text-transform: uppercase;
  margin-top: 0.5em;
  letter-spacing: 0.13em;
  text-align: center;

`
import React from 'react';
import {S} from "./Field_Styles";

type FieldPropsType = {
    fieldLabel: string
    inputIdAndName: string
    placeholder?: string
    inputType?: string
    isTextArea?: boolean
}

export const Field: React.FC<FieldPropsType> = (props: FieldPropsType) => {
    return (
        <S.StyledField>
            <S.StyledLabel htmlFor={props.inputIdAndName}>{props.fieldLabel}</S.StyledLabel>
            {props.isTextArea ?
                <S.StyledInput id={props.inputIdAndName} name={props.inputIdAndName} placeholder={props.placeholder}
                               as={"textarea"}/> :
                <S.StyledInput id={props.inputIdAndName} name={props.inputIdAndName} placeholder={props.placeholder}
                               type={props.inputType}/>}
        </S.StyledField>
    );
};
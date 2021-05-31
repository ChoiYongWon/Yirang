import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export const Text = styled.input.attrs(props => ({ type: "text" }))`

border : none ;

font-size: 1rem;


&:focus{
    outline : none;
}

@media screen and (max-width: 992px){
    text-align: center;
}


${props => {
        switch (props.size) {
            case "small":
                return `
                padding : 2px;
            `
            case "large":
                return `
                padding : 12px 20px;
            `
            case "default":
                return `
                padding : 8px 16px;
            `
            default:
                return `
                padding : 8px 10px;
            `
        }
    }}
    text-align : ${props => (props.align) || null};
    border-radius : ${props => (props.radius) || null};
${props => (props.border) ? `border : solid gray 1px;` : null};
${props => (props.block) ? `width : 90%;` : null};
${props => (props.disabled) ? `background-color: rgba(0,0,0,0);` : null};

color : ${props => (props.color) || ` #707070`};
`

/**
 * @param border 테두리 유무
 * @param radius radius 추가 
 * @param size 크기 
 * @param block 가로크기 부모로 조정
 * @param value 값
 * @param onChange onChange
 * @param placeholder 값입력 전 입력을 돕기위한 힌트
 * @param disabled textbox 비활성화
 * @param align 텍스트 정렬
 */
const TextBox = ({ autofocus, border, radius, size, block, value, onChange, placeholder, disabled, align, color }) => {
    const ref = useRef()

    useEffect(() => {
        if (autofocus) {
            ref.current.focus()
        }
    }, [autofocus])

    return (
        <>
            <Text ref={ref} border={border} align={align} radius={radius} size={size} color={color}
                block={block} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} >
            </Text>
        </>
    )
}

TextBox.propTypes = {
    size: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}
TextBox.defaultProps = {
    value: undefined,
    onClick: undefined,
}

export default TextBox
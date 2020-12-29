import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';

const ButtonComponent = styled.input.attrs(props=>({type: "button"}))`
    ${props=>{
        switch(props.size){
            case "small":
                return `
                    padding : 2px 8px;
                `
            case "large":
                return `
                    padding : 12px 20px;
                `
            default:
                return `
                    padding : 8px 16px;
                `
        }
}}
${props=>{
    switch(props.theme){
        case "black":
            return `
                background-color: #ccd4e0;
                border: 1px solid #f1f3f6;
            `
        case "white":
            return `
                background-color: #ffffff;
                border: 1px solid #ccd4e0;
            `
        default:
            return `
                background-color: #f1f3f6;
                border: 1px solid #ccd4e0;
            `
    }
}}
    ${props=>(props.round) ? `border-radius: 5px;` : null}
    ${props=>(props.block) ? `width : 100%;` : null}
    font-size: 0.9rem;
    color: #707070;
    cursor: pointer;
`

const Button=({href, theme, size, block, round, value, onClick})=>(
    <>
        <ButtonComponent href={href} theme={theme} size={size} block={block} round={round} value={value} onClick={onClick}>
        </ButtonComponent>
    </>
)

Button.propTypes = {
    href : PropTypes.string,
    theme : PropTypes.string,
    size: PropTypes.string,
    block : PropTypes.bool,
    radius : PropTypes.bool,
    value : PropTypes.string,
    onClick : PropTypes.func
}

Button.defaultProps = {
    value: 'Button',
    onClick: undefined,
};

export default Button
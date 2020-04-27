import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const WrapperDiv = styled.div`
    display:flex;
    justify-content:start;
    margin-top:5px;
    width:100%;
`

export const TextDiv = styled.div`
    width:165px;
    padding-top:5px;
    padding-left:60px;
    margin-bottom:30px;
    line-height: 30px;
    font-size: 24px;
    font-weight: 400;
`

export const SearchDiv = styled.div`
    width:660px;
    height:68px;
    padding-left:15px;
    padding-right:15px;
`

export const InputAndBtnDiv = styled.div`
    display:flex;
    position:relative;
    justify-content:space-between;
    width:630px;
    margin-bottom:10px;
`

export const Input = styled.input.attrs(
    props => ({ placeholder: props.text })
)`
    height: 40px;
    width:100%;
    padding: 10px 10px 10px 19px;
    border: 1px solid #E0E0E0;
    border-radius: 2px;
    color: #222;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    font-size: 13px;
    line-height: 18px;
    outline: none;

    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,width .5s;
    ${InputAndBtnDiv}:hover &,
    ${InputAndBtnDiv}:focus &{
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
        border-color: #008329;
    }
`
export const Btn = styled(Link)` 
    display: flex;
    align-items:center;
    justify-content: center;
    position: absolute;
    right:0;
    width:38px;
    height: 40px;
    line-height:34px;
    font-size:18px;
    color:#fff;
    background-color:rgb(55, 160, 0);
    ${InputAndBtnDiv}:hover & {
        background-color: #008329;
    }
`

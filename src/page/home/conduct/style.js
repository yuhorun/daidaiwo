import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BackgroundImageDiv = styled.div`
    display:flex;
    flex: 1 0 auto;
    padding-top: 60px;
    min-height:450px;
    background-color: #1D4354;
`

export const TextDiv = styled.div`
    width: fit-content;
    height: 1080px;
    padding: 10px 15px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:30px;
`

export const TittleSpan = styled.div`
    font-size: 52px;
    line-height: 64px;
    font-weight: 700;
    color: #6fda44;
`

export const Btn = styled(Link)`
    display: inline-block;
    padding: 9px 20px 12px;
    line-height: 16px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: #37a000;
    border-radius: 2px;
    border: 2px solid transparent;
    transition: all 0.15s;
    box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
    &:hover {
        box-shadow: 0 2px 10px 1px rgba(57, 73, 76, 0.4),0 1px 2px rgba(57, 73, 76, 0.25);
        color: #fff;
        background-color: #008329;
    }
    
    
    &.passenger {
        margin-left: 100px;
    }
    
`

import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
    padding-right: 10px;
`

export const TopListDiv = styled.div`
    width:auto;
    height:auto;
`

export const Item = styled(Link)`
    color: #37A000;
    position: relative;
    display:block;
    padding: 9px 20px;
    font-weight: 500;
    
    &:hover{
      background-color: #F9F9F9;
    }
    
    &.sub{
        color: #222222;
        text-decoration: none;
    }
    
    &.actived{
        background-color: #F9F9F9;
    }
    
    &.actived::after{
        content: " ";
        position: absolute;
        border-left: 4px solid #37A000;
        left: 0;
        right: auto;
        bottom: 0;
        top: 0;
    }
`

export const SubListDiv = styled.div`
    margin-top:30px;

`
export const TittleSpan = styled.span`
    display:block;
    line-height: 23px;
    font-size: 15px;
    font-weight: 700;
    margin-bottom:15px;
`

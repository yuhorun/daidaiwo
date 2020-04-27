import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterWrapper = styled.div`
    background-color:#1D4354;
    color:#fff;
    padding-top:20px;
    padding-bottom:10px;
`

export const FooterContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-left:15px;
    padding-right:15px;
    width:1170px;
    margin-left:auto;
    margin-right:auto;
`

export const FooterLink = styled(Link)`
    padding-bottom:6px;
    font-size: 14px;
    color: #fff;
    font-weight: 400;
    &:hover{
        text-decoration:underline;
    }
`

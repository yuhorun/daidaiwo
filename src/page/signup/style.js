import styled from 'styled-components'
import { Link } from 'react-router-dom'
import partnerLogo from '../../statics/image/partner-logo.svg'

export const WrapperHeaderDiv = styled.div`
    width: 100%;
    background-color: #fff;
    box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
`

export const HeaderCenter = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    width:990px;
    height:70px;
    padding-left:15px;
    padding-right:15px;
    margin-left:auto;
    margin-right:auto;
    background-color: #fff;
`

export const ToLogIn = styled(Link)`
    color: #37A000;
    text-decoration: none;
    font-weight: 500;
    &:hover{
        text-decoration:underline
    }
`

export const ContentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    width:100%;
    background-color:rgb(29, 67, 84);
`

export const AccountWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:525px;
    height:auto;
    padding:40px 45px;
    margin-top:30px;
    margin-bottom:30px;
    margin-left:auto;
    margin-right:auto;
    background-color: #fff;
    box-shadow: 0 1px 6px rgba(57,73,76,0.35);
`

export const AccountH1 = styled.h1`
    display:block;
    margin-bottom:40px;
`

export const Input = styled.input.attrs(
    props => ({
        placeholder: props.placeholder
    })
)`
    display: block;
    width: 100%;
    min-height: 40px;
    height: 40px;
    padding-left:48px;
    padding-right:0px;
    padding-top:10px;
    padding-bottom:10px;
    margin-bottom:30px;
    border: 1px solid #E0E0E0;
    border-radius: 2px;
    color: #222;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    font-size: 13px;
    line-height: 18px;
    outline: none;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    &:hover,
    &:focus{   
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
        border-color: #008329;
    }
`

export const Role = styled.div`
    margin-top:20px;
    margin-bottom:30px;
    box-shadow: 0 1px 6px rgba(57,73,76,0.35);
`

export const Button = styled.button`
    padding: 11px 28px;
    font-size: 14px;
    line-height: 14px;
    border-radius: 2px;
    user-select: none;
    display: inline-block;
    border: solid 2px transparent;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    white-space: nowrap;
    background-image: none;
    outline:none;
    transition: all .15s;
    box-shadow: 0 1px 6px rgba(57,73,76,0.35);
`

export const RoleButton1 = styled(Button)`
    float:left;
    border-color: transparent;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    margin: 0;
    box-shadow: none;
    color: #656565;
    background-color: #fff;
    &:hover{
        background-color:#37A000;
        color: #fff;
    }
`

export const RoleButton2 = styled(Button)`
    position: relative;
    float:left;
    border-color: transparent;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin: 0;
    box-shadow: none;
    color: #656565;
    background-color: #fff;
    &::before {
        content: '';
        position: absolute;
        left: -2px;
        top: -2px;
        bottom: -2px;
        width: 1px;
        background-color: #E0E0E0;
    }

    &:hover{
        background-color:#37A000;
        color: #fff;
    }
`

export const CheckBox = styled.div`
    padding:4px 3px 4px 25px;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 20px;
`

export const SubmitBtn = styled(Button)`
    color: #fff;
    font-weight:500;
    background-color: #37A000;
    border-color: transparent;
    &:hover{
        background-color: #008329;
    }
`

export const ParterWrapper = styled(ContentWrapper)`

    padding-top:30px;
    padding-bottom:30px;
    background-color:#fff;
    align-items:center;
`

export const ParterLogo = styled.div`
    width:1170px;
    height: 55px;
    margin-left:auto;
    margin-right:auto;
    margin-top:20px;
    padding-left:15px;
    padding-right:15px;
    background-image: url(${partnerLogo});
`
export const SvgDiv = styled.div`
    background-color:rgb(249, 249, 249);
    width:100%;
    height:100%;
`

export const SvgContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-left:auto;
    margin-right:auto;
    width:1170px;
    padding-left:15px;
    padding-right:15px;
    padding-top:30px;
    min-height:200px;
`

export const SvgTittle = styled.h2`
    line-height: 23px;
    font-size: 18px;
    font-weight:500;
    color: #222;
    padding-bottom: 30px;
`
export const SvgThreeDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-left:-15px;
    margin-right:-15px;
    width:100%;
`

export const SvgAlone = styled.div`
    display:flex;
    flex-direction:row;
    position: relative;
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    margin-bottom:30px;
    margin-left:0;
    margin-right:0;
    padding-right: 15px;
    padding-left: 15px;
    
    &::before{
        content: "";
        position: absolute;
        right: 15px;
        top: 0;
        width: ${props => (props.last ? '0px' : '1px')};
        height:100%;
        background-color: #e0e0e0;
    }
`

export const SvgImg = styled.div`
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
`

export const SvgText = styled.div`
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
    padding-right: 15px;
    padding-left: 15px;
    position: relative;
    width: 100%;
`

export const Footer = styled.div`
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
    font-size: 14px;
    color: #fff;
    font-weight: 400;
`

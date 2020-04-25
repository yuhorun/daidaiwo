import styled from 'styled-components'
import textLogo from '../../statics/image/DDWlogo.png'
import { Link } from 'react-router-dom'

export const WrapperDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1030;
    background-color: #fff;
    box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
`

export const CenterDiv = styled.div`
    display: flex;
    justify-content:space-between;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
    width: 1170px;
    height: 70px;
    background-color: #fff;
}
`

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5px;
    min-height: 70px;
`

export const LogoA = styled.a.attrs({
    href: '/'
})`
    display: inline-block;
    width: 160px;
    height: 40px;
    color: #37a000;
    font-weight: 500;
    background-image: url(${textLogo});
    background-repeat: no-repeat;
    background-size: 160px 40px;
    background-color: transparent;
}
`

export const OperationDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width:1029px;
`

export const InputDiv = styled.div`
    position: relative;
    display: flex;
    align-self:center;
    align-items: center;
    margin-left:120px;
    margin-right: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    background-color:yellow;
`

export const SearchInput = styled.input.attrs({
    placeholder: '搜索'
})`
    display: inline-block;
    width:200px;
    height: 40px;
    padding: 10px 40px 10px 20px;
    color: #222;
    font-size: 14px;
    line-height: 18px;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    font-family: "Microsoft YaHei",serif;
    font-weight: 400;
    outline: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,width .5s;
    &::placeholder{
        font-weight:400;
        color:rgb(51, 51, 51);
    }
    ${InputDiv}:hover &,
    ${InputDiv}:focus &{
        width:300px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
        border-color: #008329;
    }
`

export const SearchIconA = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    right: 6px;
    width:34px;
    height: 34px;
    border-radius: 17px;
    line-height:34px;
    text-align:center;
    font-size:18px;
    ${InputDiv}:hover & {
        color: #37a000;
  }
`

export const SignAndLogDiv = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`

export const SignAndLog = styled(Link)`
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 15px;
    line-height: 15px;
    color: #666;
    background-color: transparent;
    &:hover {
        color: #37a000;
    }
`
export const AvatarDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
`

export const TapAvatar = styled.div`
    display: none;
    position: absolute;
    width: 100px;
    margin-top: -1px;
    top: 100%;
    right: 8px;
    height: 0;
    box-shadow: 0 1px 6px rgba(57,73,76,.35);
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    
    ${AvatarDiv}:hover &{
      display: block;
      height: 100%;
    }
    
    &::after{
        content: '';
        position: absolute;
        top: -8px;
        right: -5px;
        border: solid 8px transparent ;
        transform: translateX(-50%) rotate(135deg);
        box-shadow: -2px 2px 3px rgba(57,73,76,.1);
        background-color: #fff;
    }
`

export const TapItem = styled.div`
    padding: 10px 10px;
    background-color: #fff;
    cursor:pointer; 
    :hover{
      color: #008329;;
      background-color: #e0e0e0;
      border-left: solid 3px #008329;
      margin-left: -3px;
    }
`

export const PostDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Post = styled(Link)`
    border-radius: 2px;
    color: #fff;
    background-color: #37a000;
    border: 2px solid transparent;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    background-image: none;
    transition: all 0.15s;
    box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
    font-size: 15px;
    line-height: 15px;
    margin-left: 20px;
    padding: 7px 18px 6px;
    transition: all 0.15s;
    &:hover {
        box-shadow: 0 2px 10px 1px rgba(57, 73, 76, 0.4),0 1px 2px rgba(57, 73, 76, 0.25);
        color: #fff;
        background-color: #008329;
    }
`

export const NavDiv = styled.div`
    height:40px;
    width:100%;
    overflow: hidden;
    background-color:rgb(249, 249, 249);
    transition: height .35s ease-out;
    box-shadow: -900px 0 0 #f9f9f9, -900px -1px 0 #e0e0e0, 900px 0 0 #f9f9f9, 900px -1px 0 #e0e0e0, 0 -1px 0 #e0e0e0;
    &.Scrolled {
    height:0;
    }
`
export const NavCenterItemDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
    width: 1170px;
    height: 40px;
`
export const NavItemA = styled.a.attrs({
    href: '/'
})`
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    color: #222;
`

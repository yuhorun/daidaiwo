import styled from 'styled-components'
import { Link } from 'react-router-dom';


//整个页面的Wrapper
export const Wrapper = styled.div`
    display:flex;
    height:100%;
    flex-direction:column;
    background-color:#1D4354;
`

//Header的Wrapper
export const WrapperHeaderDiv = styled.div`
    width: 100%;
    background-color: #fff;
    box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
`;

export const HeaderCenter = styled.div`
    display: flex;
    align-items:center;
    width:990px;
    height:70px;
    padding-left:15px;
    padding-right:15px;
    margin-left:auto;
    margin-right:auto;
    background-color: #fff;
`

//Hdader下面的内容
export const ContentWrapper = styled.div`
    flex:1 0 auto;
    width:100%;
`

//表单的Wrapper
export const AccountWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:525px;
    height:auto;
    padding:50px 80px;
    margin:60px auto 0;
    background-color: #fff;
    border-radius:5px;
    box-shadow: 0 1px 6px rgba(57,73,76,0.35);
`

//Input的Wrapper  为了absolute icon-font 使用的是before， 另一种absolute icon-font的方式是把icon-font当成子组件  用absolute
export const InputWarapper = styled.div`
    position: relative;
    display:flex;
    align-items:center;
    width: 100%;
    height: 40px;
    padding: 10px 0px 10px 30px;
    margin-bottom:30px;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    color: #222;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    font-size: 13px;
    line-height: 18px;
    
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    &:hover,
    &:focus{   
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
        border-color: #008329;
    }
    &::before {
        content: "${props => props.text}";
        font-size:15px;
        font-family: "iconfont";
        position: absolute;
        top: 10px;
        left: 8px;
        width: 20px;
        height: 20px;
        color:#008329;
    }
`

export const Input = styled.input` 
    display:flex;
    align-items:center;
    width: 100%;
    height: 100%;
    outline: none;
    border:none;
`


export const Button = styled.button`
    padding: 11px 48px;
    font-size: 14px;
    line-height: 14px;
    border-radius: 5px;
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


export const SubmitBtn = styled(Button)`
    color: #fff;
    font-weight:500;
    background-color: #37A000;
    border-color: transparent;
    &:hover{
        background-color: #008329;
    }
`
export const SendMsgWrapper = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    margin-bottom:30px;
`

export const SendMsgBtn = styled(Button)`
    padding: 7px 11px;
    margin-left:5px;
    color: #fff;
    font-weight:500;
    background-color: #37A000;
    border-color: transparent;
    &:hover{
        background-color: #008329;
    }
`

export const KeepAndForgetDiv = styled.div`
    display:flex;
    width:100%;
    margin-top:-10px;
    margin-bottom:10px;
    align-items:center;
    flex-direction:row;
    justify-content:space-between;
`

export const KeepDiv = styled.div`
    display:flex;
    align-items:center;
    padding: 4px 3px;
    font-weight: 400;
    cursor: pointer;
    color: #969696;
    font-size:13px;
`

//勾选框  没有用checkbox  用的是div 定义样式：
export const CheckBox = styled.div`
    position: relative;
    width: 13px;
    height: 13px;
    line-height: 13px;
    font-size: 13px;
    color: #37a000;
    cursor: pointer;
    background-color: #fff;
    margin-right: 6px;
    ::before {
        content: "${props=>props.activate?"\\e6a6":""}";
        font-family:"iconfont";
        position: absolute;
        top: 0;
        left: 0;
        color:${props=>props.activate?"#fff":"#37a000"};
        background: ${props=>props.activate?"#37a000":"#fff"};
        width: 100%;
        height: 100%;
        border: 1px solid #37a000;
    }
`

// ${props=>props.active?"\\e6a6":""};
export const ForgetDiv = styled(Link)`
    color: #37a000;
    text-decoration: none;
    font-weight: 500;
    font-size:12px;
`

export const LogAndSignDiv = styled.div`
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:space-around;
    width:100%;
    padding-left:50px;
    padding-right:50px;
    margin-bottom:20px;
    
`


export const LogAndSign = styled(Link)`
    padding: 10px;
    color: #969696;
    cursor: pointer;

    &.active{
        color:#008329;
        border-bottom:solid 2px #008329;
        font-weight:bold;
    }

`
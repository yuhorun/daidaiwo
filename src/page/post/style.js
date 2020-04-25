import styled from 'styled-components'

export const Input = styled.input.attrs(
    props=>({
        placeholder:props.placeholder
    })
)`
    display: inline-block;
    width: 100%;
    min-height: 40px;
    height: 40px;
    padding-left:48px;
    padding-right:0px;
    padding-top:10px;
    padding-bottom:10px;
    margin-bottom:30px;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
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


export const Button = styled.button`
    padding: 11px 48px;
    font-size: 14px;
    line-height: 14px;
    border-radius: 5px;
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



export const Wrapper = styled.div`
    display:flex;
    height:100%;
    flex-direction:column;
`


export const WrapperHeaderDiv = styled.div`
    width: 100%;
    background-color: #fff;
    box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
`;

export const HeaderCenter = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    width:990px;
    height:70px;
    padding-left:15px;
    padding-right:15px;
    margin-left:auto;
    margin-right:auto;
    background-color: #fff;
`





export const ContentWrapper = styled.div`
    flex:1 0 auto;
    width:100%;
    background-color: #F2F2F2;
`

export const ContentCenter = styled.div`
    width:990px;
    margin-top:30px;
    margin-bottom:30px;
    margin-right:auto;
    margin-left:auto;
    padding-right:15px;
    padding-left:15px;
`
export const StepDiv = styled.div`
    position: relative;
    width:100%;
    margin-top:30px;
    background-color: #fff;
    box-shadow: 0 1px 6px rgba(57,73,76,0.35);
`
export const StepHeader = styled.div`
    background-color: #F9F9F9;
    border-bottom: 1px solid #E0E0E0;
    padding:30px;
`

export const StepContent = styled.div`
    display:flex;
    flex-direction:column;
    padding:30px;
`

export const DoWhat = styled.label`
    display: inline-block;
    margin-bottom: 10px;
    color: #222;
    font-weight: 700;
    font-size: 13px;
    text-align: left;
`

export const DoWhatInput = styled(Input)`
    height:44px;
    width:60%;
    padding: 13px 19px;
    margin-bottom:10px;
`
export const TextArea = styled.textarea`
    display:block;
    width: 100%;
    max-width:100%;
    min-height: 250px;
    min-width:30%;
    padding: 10px;
    margin-bottom:30px;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
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

export const DropDownDiv = styled.div`
    position: relative;
    display: inline-block;
`
export const DropDownBtn = styled.button`
    display:inline-block;
    position:relative;
    height:40px;
    width:30%;
    padding:11px 9px 11px 21px;
    outline:none;
    border: 2px solid transparent;
    cursor: pointer;
    background-color:#fff;
    text-align:left;
    color:#008329;
    font-weight: 500;
    box-shadow: 0 1px 6px rgba(57,73,76,.35);
    transition: all .15s;
    &:hover,
    &:focus{
        box-shadow: 0 2px 10px 1px rgba(57,73,76,.4), 0 1px 2px rgba(57,73,76,.25);
    }
    &::before {
        content: ' ';
        z-index: 1;
        position: absolute;
        height: 20px;
        top: 10px;
        right: 34px;
        border-left: 1px solid #CBD2D7;
    }
    &::after {
        content: ' ';
        position: absolute;
        z-index: 1;
        top: 18px;
        right: 13px;
        border-top: 6px solid #7B8E9B;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
    }
`

export const OptionDiv = styled.div`
    display:none;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 4;
    max-height:180px;
    width: 30%;
    margin: 2px 0 0;
    padding: 10px 0;
    overflow-y:auto;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 2px rgba(0, 0, 0, .3);
    &.open {
        display:block;
    }
`

export const Option = styled.a`
    text-align: left;
    font-size: 12px;
    font-weight: bold;
    color: #7B8E9B;
    padding: 10px 20px;
    margin: 0;
    cursor: pointer;
    display: block;
    line-height: 1.2;
    text-decoration: none;
    &:hover{
        background-color:#F2F2F2;;
        color:#37A000;
    }
`


export const AddQuestionDiv = styled.div`
    width:100%;
`

export const AddQuestionBtn = styled(Button)`
    display:inline-block;
    padding:10px 18px;
    margin-left:6px;
    text-align:right;
    font-size:14px;
    font-weight:bold;
    color:#fff;
    background-color: #37A000;
    &:hover{
        background-color: #008329;
    }
`

export const Question = styled.div`
    display:flex;
    margin-bottom:5px;
    margin-top:5px;
    font-size: 14px;
    line-height: 14px;
`
export const DelQuestionBtn = styled(Button)`
    display:block;
    padding:8px;
    margin-right:6px;
    background-color: #008329;
    color:#fff;
    &:hover{
        background-color: rgb(164,0,0);
    }
`

export const QuestionText = styled.div`
    padding:8px;
    height:auto;
    word-wrap:break-word; 
`

export const AddAndSubtractWarpper = styled.div`
    display:flex;
    align-items:center;
    padding-left:20px;
    margin-bottom:10px;
    font-size:16px;
`

export const AddAndSubtractDiv = styled.div`
    display:flex;
    align-items:center;
    width:fit-content;
    margin-left:10px;
    margin-right:10px;
    border-radius: 15px;
    font-weight: 500;
    background-color: #37A000;
    white-space: nowrap;
    background-image: none;
    outline:none;
    transition: all .15s;
    box-shadow: 0 1px 6px rgba(57,73,76,0.35);
`

export const AddAndSubtractBtn = styled(Button)`
    width:fit-content;
    width:30px;
    padding:6px;
    font-size:18px;
    background-color: transparent;
    border-color: transparent;
    border:none;
    border-radius: 15px;
    box-shadow:none;
    color:#fff;
    margin:0;
    &:hover{
        background-color: rgb(164,0,0);
    }
`

export const AddAndSubtractText = styled.div`
    display:inline-block;
    padding:0 5px;
    width:fit-content;
    font-size:20px;
    align-items:center;
    background-color:transparent;
    border:none;
    color:#fff;
`
export const SubmitBtn = styled(Button)`
    color: #fff;
    font-weight:bold;
    font-size:18px;
    background-color: #37A000;
    border-color: transparent;
    &:hover{
        background-color: #008329;
    }
    &.cancel {
        margin-left:60px;
        background-color:#fff;
        font-size:14px;
        color:#37A000;
    }
`

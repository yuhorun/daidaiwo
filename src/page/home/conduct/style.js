import styled from "styled-components";

export const BackgroundImageDiv = styled.div`
    min-height:450px;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    padding-bottom: 10px;
    padding-top: 20px;
    height: auto;
    background-image: url(https://assets.static-upwork.com/assets/Adquiro/0e92f18/wp/images/xl.8e87b1d32a5a.jpg);
    background-position: 50%;
    background-size: cover!important;
    background-repeat: no-repeat;
`

export const TextDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    width:1170px;
    height: 356px;;
    padding-top:10px;
    padding-bottom:10px;
    padding-left:15px;
    padding-right:15px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:5px;
`


export const TittleSpan = styled.div`
    font-size: 52px;
    line-height: 64px;
    font-family: "Canela Deck Bold";
    font-weight: 700;
    color: #6fda44;
`

export const SubTittleSpan = styled(TittleSpan)`
    display:block;
    margin-bottom:30px;
    max-width: 50%;
    font-weight: 400;
    color:#fff;
    font-size: 18px;
    line-height: 27px;
`

export const ButtonDiv = styled.div`
    margin-bottom:0;

`

export const SignDiv = styled.div`
    width:1170px;
    padding-right:60px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:0;
    text-align: right;
`
import styled from 'styled-components'

export const Layout = styled.div`
    position:relative;
    padding-top: 110px;
    flex: 1 0 auto;
    background-color: #F2F2F2;
`

export const Center = styled.div`
    width:990px;
    margin-top:5px;
    margin-left:auto;
    margin-right:auto;
    padding-top:20px;
`

export const SubCenter = styled.div`
    display:flex;
    width:100%;
`
export const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    pointer-events:auto;
    z-index:-1;
    background-color:rgba(160, 160, 160,0);
    transition: background-color 150ms linear;
    &.open{
        z-index:1050;
        background-color:rgba(160, 160, 160,0.9);
    }

`

export const Slide = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-y: auto;
    opacity: 0;
    z-index:-1;
    width:100%;
    height:100%;
    pointer-events:auto;
    transform: translateX(100%);
    transition: transform 400ms,opacity 150ms linear;
    will-change: transform;
    &.open{
        z-index:1051;
        transform: translateX(0);
        opacity: 1;
    }
`

export const DtailWrapperDiv = styled.div`

    position: relative;
    top: auto;
    left: auto;
    width: auto;
    max-width: 1020px;
    min-height: 100%;
    margin: 0 auto;
    background: #f2f2f2;
    box-shadow:990px 0 0 #f2f2f2, -2px 0 7px rgba(57,73,76,.45);
    &.open{
        z-index:1051;
    }
`

export const DetailHeader = styled.div`
    z-index: auto;
    display: flex;
    line-height:40px;
    justify-content:space-between;
    position: relative;
    background: #fff;
    pointer-events:auto;
    border-bottom: 1px solid #e0e0e0;
    padding: 15px;
    box-shadow: 990px -1px 0 #fff, 990px 0 0 0 #e0e0e0;

`

export const DetailDiv = styled.div`
    display:flex;
    margin:30px;
    margin-top:15px;
    margin-bottom:0;
    pointer-events:auto;
    box-shadow: 0 1px 6px rgba(57,73,76,.35);
`

export const DetailBody = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#fff;
`

export const DetailTittle = styled.div`
    width:681px;
    padding:30px;
    line-height: 27px;
    font-size: 21px;
    font-weight: 400;
    background-color:rgb(249, 249, 249);
    border-bottom: 1px solid #E0E0E0;
`

export const DetailTextWrapper = styled.div`
    width:681px;
    padding: 20px 30px;
    &::after {
    content: " ";
    border-bottom: 1px solid #E0E0E0;
    display: block;
    position: relative;
    top: 20px;
    left: auto;
    width: auto;
    }

    &.noborder {
        &::after{
            border-bottom:none;
        }
    }
`

export const DetailProps = styled.div`
    font-weight: 700;
    margin-bottom: 10px;
`

export const DetailText = styled.div`
    overflow-wrap: break-word;
`

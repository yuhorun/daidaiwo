import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FlexDiv = styled.div`
    flex: 0 0 66.66667%;
    padding-left:15px;
    padding-right:15px;
    margin-bottom: 50px;
`

export const BorderDiv = styled.div`
    border-radius:5px;
    width:100%;
    border:solid 1px #e0e0e0;
    box-shadow: 0 1px 6px rgba(57,73,76,0.35);
    background-color:#f9f9f9;
`

export const Tittle = styled.div`
    padding:30px;
    border-bottom: 1px solid #E0E0E0;
`
export const Text = styled.h2`
    line-height: 27px;
    font-size: 21px;
    font-weight: 400;
`

export const TaskWraper = styled(Link)`
    display:block;
    width:100%;
    border-bottom: 1px solid #E0E0E0;
    padding: 20px 30px;
    background-color: #fff;
    
    :hover{
      background-color: #f9f9f9;
    }
`

export const TaskTittleDiv = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    margin-bottom:20px;
`

export const TaskTittleA = styled.div`
    color: #656565;
    font-weight:400;
    line-height: 23px;
    font-size: 18px;
    &:hover {
        color:#008329;
        text-decoration:underline;
    }
`

export const Btn = styled.button` 
    display:flex;
    width:30px;
    height:30px;
    padding: 5px;
    border: none;
    border-radius: 15px;
    justify-content:center;
    align-items:center;
    font-family: "iconfont",serif;
    box-shadow:  0 1px 6px rgba(57,73,76,0.35);
    font-size: 6px;
    cursor: pointer;
    outline:none;
    background-color:transparent;
    transition:color 0.1s linear;
    color: #37A000;
    z-index:1;
    &:hover {
        box-shadow: 0 2px 10px 1px rgba(57,73,76,0.4), 0 1px 2px rgba(57,73,76,0.25);;
    }
    
    &.like {
        
    }

`
export const TaskDetailDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:15px;
`

export const DetalText = styled.div`
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    font-size: 13px;
    line-height: 1.8;
    color: #222;
`

export const MoreA = styled.div`
    display:inline-block;
    z-index:1;
    color: #37A000;
    &:hover{
        text-decoration:underline;
    }
`
export const DetailCategory = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-bottom:10px;
`

export const CategoryItem = styled.div`
    background-color: #E0E0E0;
    border-radius: 4px;
    color: #222;
    font-size: 12px;
    display: inline-block;
    padding: 5px 10px;
    margin-right:5px;
    line-height: 1;
`

export const DetailEnd = styled.div`
    line-height:20px;
    font-size:12px;
    color: #222;
`

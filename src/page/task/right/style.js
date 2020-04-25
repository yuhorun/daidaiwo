import styled from 'styled-components'

export const Wrapper = styled.div`
    flex:0 0 16.66667%;
    max-width: 16.66667%;
    padding-left:10px;
`

export const AvatarDiv = styled.img`
    display:block;
    margin-left:30px;
    height:100px;
    width:100px;
    border-radius:50%;
    background-image:url(${props => props.src});
    background-repeat:no-repeat;
    background-position:center;
    background-color:yellow;
`

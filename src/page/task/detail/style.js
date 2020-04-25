import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    height:100%;
    width:100%;
    background-color:yellow;
    opacity: 1;
    z-index:3000;
`

export const BackTittle = styled.div`
    display:flex;
    justify-content:space-between;
    width:1020px;
    height:81px;
    padding: 20px;
    z-index:3000;
    opacity: 1;
    z-index:3000;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 990px -1px 0 #fff, 990px 0 0 0 #e0e0e0;
`


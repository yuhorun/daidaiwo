import styled from 'styled-components'

export const CategoryDiv = styled.div`
    width:1170px;
    flex: 0 0 100%;
    margin-left:auto;
    margin-right:auto;
    padding-top:30px;

`

export const TittleDiv = styled.div`
    line-height: 24px;
    font-size: 17px;
    font-weight: 600;
    padding-left:15px;
    color: #222;
    margin-bottom: 20px
`

export const Gride = styled.div`
    display: flex;
    flex-wrap: wrap;

`
export const ItemFlex = styled.div`
    overflow: hidden;
    position: relative;
    flex: 0 0 25%;
    width:292.5px;
    padding-left:15px;
    padding-right:15px;
    padding-bottom:30px;
    
`

export const ItemA = styled.a.attrs({
    href:"/"
})`
    display:inline-block;
    border-radius: 2px;
    box-shadow: 0 1px 6px rgba(57,73,76,.35);
`

export const ImageDiv = styled.img.attrs(props => ({
  // we can define static props
    src: props.src,
    alt: props.alt
}))`
    width:262.5px;
`

export const TextDiv = styled.div`
    line-height: 20px;
    font-size: 15px;
    font-weight: 600;
    margin-top:20px;
    margin-bottom:20px;
    color: #222;
    font-family: inherit;
    text-align:center;
`

export const EndTextA = styled.a.attrs({
    href:"/"
})`
    color: #37a000;
    &:hover{
        text-decoration:underline;
    }
`
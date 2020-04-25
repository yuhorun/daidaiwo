import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { connect } from 'react-redux'

export const Style = createGlobalStyle`
  
* {
    margin: 0;
    padding: 0;
    text-decoration:none;
    box-sizing: border-box;
}

body {
    user-select:none;/* 禁止选中文字 */
    height:100%;
    overflow-y:${props => props.isOpen};
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
}

#root{
  position:relative;
  height:100%;
}

@font-face {
  font-family: 'iconfont';  /* project id 1709418 */
  src: url('//at.alicdn.com/t/font_1709418_ssj6p9j9qyc.eot');
  src: url('//at.alicdn.com/t/font_1709418_ssj6p9j9qyc.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1709418_ssj6p9j9qyc.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1709418_ssj6p9j9qyc.woff') format('woff'),
  url('//at.alicdn.com/t/font_1709418_ssj6p9j9qyc.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1709418_ssj6p9j9qyc.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont";
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

const GlobalStyle = function (props) {
    return (
        <Style isOpen={props.isOpen} />
    )
}

const mapStateToProps = (state) => {
    return {
        isOpen: state.taskState.isOpen
    }
}

export default connect(mapStateToProps, null)(GlobalStyle)

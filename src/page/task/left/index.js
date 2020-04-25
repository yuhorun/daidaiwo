import React from 'react'

import {
    Wrapper,
    TopListDiv,
    Item,
    SubListDiv,
    TittleSpan
} from './style'
import PropTypes from 'prop-types'

const Left = function (props) {
    return (
        <Wrapper>
            <TopListDiv>
                <Item className={props.subPageid === 1 ? 'actived' : ''} to={'/task/mytask'}>我的任务</Item>
                <Item className={props.subPageid === 2 ? 'actived' : ''} to={'/task/recommend'}>推荐</Item>
                <Item className={props.subPageid === 3 ? 'actived' : ''} to={'/task/like'}>收藏</Item>
            </TopListDiv>
            <SubListDiv>
                <TittleSpan>类别</TittleSpan>
                <Item className={props.subPageid === 4 ? 'actived sub' : 'sub'} to={'/task/software'}>程序开发</Item>
                <Item className={props.subPageid === 5 ? 'actived sub' : 'sub'} to={'/task/ai'}>人工智能</Item>
                <Item className={props.subPageid === 6 ? 'actived sub' : 'sub'} to={'/task/img'}>图像处理</Item>
                <Item className={props.subPageid === 7 ? 'actived sub' : 'sub'} to={'/task/datacollection'}>数据采集</Item>
                <Item className={props.subPageid === 8 ? 'actived sub' : 'sub'} to={'/task/dataanalyze'}>数据分析</Item>

            </SubListDiv>
        </Wrapper>
    )
}

Left.propTypes = {
    subPageid: PropTypes.number
}

export default Left

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import axios from 'axios'

import { GlobalAction } from '../../../redact'
import { connect } from 'react-redux'

import {
    WrapperDiv,
    CenterDiv,
    LogoDiv,
    LogoA,
    OperationDiv,
    InputDiv,
    SearchInput,
    SearchIconA,
    SignAndLogDiv,
    SignAndLog,
    PostDiv,
    Post,
    NavDiv,
    NavCenterItemDiv,
    NavItemL,
    AvatarDiv,
    TapAvatar,
    TapItem
} from './style'

const Header = function (props) {
    const [isScrolled, setIsScroll] = useState(false)

    const handlerScrolled = () => {
        if (document.documentElement.scrollTop === 0) {
            setIsScroll(false)
        } else if (document.documentElement.scrollTop > 0) {
            setIsScroll(true)
        }
    }

    const logouthandler = () => {
        axios({
            url: 'logout',
            baseURL: 'http://localhost:8000/',
            method: 'POST',
            withCredentials: true
        }).then(
            res => {
                if (res.data.code === 202) {
                    props.handlerLogout()
                }
            }
        )
    }
    // 防止重复渲染，
    useEffect(() => {
        window.addEventListener('scroll', handlerScrolled)
        return () => { window.removeEventListener('scroll', handlerScrolled) }
        // eslint-disable-next-line
    }, [])
    return (
        <WrapperDiv>
            <CenterDiv>
                <LogoDiv>
                    <LogoA to = "/" />
                </LogoDiv>
                <OperationDiv>
                    <InputDiv>
                        <SearchInput/>
                        <SearchIconA><i className="iconfont">&#xe65a;</i></SearchIconA>
                    </InputDiv>
                    <SignAndLogDiv>
                        {props.isLoged
                            ? <AvatarDiv>
                                <Avatar>H</Avatar>
                                <TapAvatar >
                                    <TapItem >我的任务</TapItem>
                                    <TapItem onClick={() => logouthandler()}>退出</TapItem>
                                </TapAvatar>
                            </AvatarDiv>
                            : <React.Fragment/>
                        }
                        <SignAndLog to = "/task">发现任务</SignAndLog>
                        {props.isLoged
                            ? <React.Fragment/>
                            : <React.Fragment>
                                <SignAndLog to = "/user/login">登录</SignAndLog>
                                <SignAndLog to = "/user/signup">注册</SignAndLog>
                            </React.Fragment>
                        }
                        <PostDiv>
                            <Post to = "/post">发布任务</Post>
                        </PostDiv>
                    </SignAndLogDiv>
                </OperationDiv>
            </CenterDiv>
            <NavDiv className={isScrolled ? 'Scrolled' : ''}>
                <NavCenterItemDiv>
                    <NavItemL to={'/task'}>所有分类</NavItemL>
                    <NavItemL to={'/task/software'}>程序开发</NavItemL>
                    <NavItemL to={'/task/ai'}>人工智能</NavItemL>
                    <NavItemL to={'/task/img'}>图像处理</NavItemL>
                    <NavItemL to={'/task/datacollection'}>数据采集</NavItemL>
                    <NavItemL to={'/task/dataanalyze'}>数据分析</NavItemL>
                </NavCenterItemDiv>
            </NavDiv>
        </WrapperDiv>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoged: state.globalState.isLoged
    }
}

const mapDispatchToProps = (dispatch) => ({
    handlerLogout () {
        dispatch(GlobalAction.isLoged(false))
    }
}
)
Header.propTypes = {
    isScrolled: PropTypes.bool,
    handlerScrolled: PropTypes.func,
    isLoged: PropTypes.bool,
    handlerLogout: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

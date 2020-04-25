import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import axios from 'axios'
// import { useHistory } from 'react-router-dom'

import { action } from './redact'
import { GlobalAction } from '../../redact'

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
    NavItemA,
    AvatarDiv,
    TapAvatar,
    TapItem
} from './style'

const Header = function (props) {
    // const history = useHistory()

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
        window.addEventListener('scroll', props.handlerScrolled)
        // eslint-disable-next-line
    }, [])
    return (
        <WrapperDiv>
            <CenterDiv>
                <LogoDiv>
                    <LogoA/>
                </LogoDiv>
                <OperationDiv>
                    <InputDiv>
                        <SearchInput/>
                        <SearchIconA><i className="iconfont">&#xe65a;</i></SearchIconA>
                    </InputDiv>
                    <SignAndLogDiv>
                        {props.isLoged
                            ? <AvatarDiv>
                                <Avatar onClick={() => { console.log('taped avatar') }}>H</Avatar>
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
            <NavDiv className={props.isScrolled ? 'Scrolled' : ''}>
                <NavCenterItemDiv>
                    <NavItemA>所有分类</NavItemA>
                    <NavItemA>网页/程序开发</NavItemA>
                    <NavItemA>艺术设计</NavItemA>
                    <NavItemA>人工智能</NavItemA>
                    <NavItemA>数据分析</NavItemA>
                    <NavItemA>文章/写作</NavItemA>
                    <NavItemA>手工搬砖</NavItemA>
                </NavCenterItemDiv>
            </NavDiv>
        </WrapperDiv>
    )
}

const mapStateToProps = (state) => {
    return {
        isScrolled: state.headerState.isScrolled,
        isLoged: state.globalState.isLoged
    }
}

const mapDispatchToProps = (dispatch) => ({
    handlerScrolled () {
        if (document.documentElement.scrollTop === 0) {
            dispatch(action.scroll(false))
        } else if (document.documentElement.scrollTop > 0) {
            dispatch(action.scroll(true))
        }
    },
    handlerLogout () {
        dispatch(GlobalAction.isLoged(false))
    }
}
)
Header.propTypes = {
    isScrolled: PropTypes.bool,
    handlerScrolled: PropTypes.func,
    isLoged: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

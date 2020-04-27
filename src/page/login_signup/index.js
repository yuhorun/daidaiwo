import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import store from '../../store'
import { GlobalAction } from '../../redact'

import {
    Wrapper,
    WrapperHeaderDiv,
    HeaderCenter,
    LogoDiv,
    LogoA,
    AccountWrapper,
    Input,
    SubmitBtn,
    KeepAndForgetDiv,
    KeepDiv,
    CheckBox,
    ForgetDiv,
    LogAndSignDiv,
    LogAndSign,
    InputWarapper,
    SendMsgBtn,
    SendMsgWrapper
} from './style'

const LogInAndSignup = function () {
    const { action } = useParams()
    const history = useHistory()

    const [state, setState] = useState({
        activate: true,
        logInPhoneNumber: '',
        logInPassword: '',
        logInMsg: '',

        signUpUserName: '',
        signUpPassword: '',
        signUpPhoneNumber: '',
        verifyCode: '',
        signUpMsg: ''

    })

    const handlerLogInBtn = () => {
        axios({
            url: '/login',
            baseURL: 'http://localhost:8000',
            method: 'POST',
            withCredentials: true, // cookie 相关  如不设置  无法发送cookie
            data: JSON.stringify({ pnumber: state.logInPhoneNumber, upwd: state.logInPassword })
        }).then(res => {
            if (res.data.code === 201) {
                store.dispatch(GlobalAction.isLoged(true))
                history.replace('/')
            }
        })
    }

    const handlerSignUpBtn = () => {
        axios({
            url: '/signup',
            baseURL: 'http://localhost:8000',
            method: 'POST',
            withCredentials: true, // cookie 相关  如不设置  无法发送cookie
            data: JSON.stringify({ uname: state.signUpUserName, upwd: state.signUpPassword, pnumber: state.signUpPhoneNumber })
        }).then(res => {
            if (res.data.code === 203) {
                store.dispatch(GlobalAction.isLoged(true))
                history.replace('/')
            }
        })
    }

    return (
        <Wrapper>
            <WrapperHeaderDiv>
                <HeaderCenter>
                    <LogoDiv>
                        <LogoA to={'/'}/>
                    </LogoDiv>
                </HeaderCenter>
            </WrapperHeaderDiv>

            <AccountWrapper>
                <LogAndSignDiv>
                    <LogAndSign className={(action === 'login') ? 'active' : ''} to="/user/login">登录</LogAndSign>
                    <LogAndSign className={(action === 'signup') ? 'active' : ''} to="/user/signup">注册</LogAndSign>
                </LogAndSignDiv>

                {(action === 'login')
                // 登录
                    ? <React.Fragment>
                        <InputWarapper text="\e607"><Input value={state.logInPhoneNumber} onChange={(e) => setState({ ...state, logInPhoneNumber: e.target.value })} placeholder="用户名或手机号码"/></InputWarapper>
                        <InputWarapper text="\e60c"><Input value={state.logInPassword} onChange={(e) => setState({ ...state, logInPassword: e.target.value })} placeholder="密码" type="password"/></InputWarapper>
                        <KeepAndForgetDiv>
                            <KeepDiv onClick={() => setState({ ...state, activate: !state.activate })}>
                                <CheckBox activate={state.activate}/>
                            保持登陆状态
                            </KeepDiv>
                            <ForgetDiv to="/user/signup">忘记密码?</ForgetDiv>
                        </KeepAndForgetDiv>
                        <SubmitBtn onClick={() => handlerLogInBtn()}>登录</SubmitBtn>
                    </React.Fragment>
                    // eslint-disable-next-line operator-linebreak
                    :
                // 注册
                    <React.Fragment>

                        <InputWarapper text="\e607"><Input value={state.signUpUserName} onChange={(e) => setState({ ...state, signUpUserName: e.target.value })} placeholder="用户名"/></InputWarapper>
                        <InputWarapper text="\e659"><Input value={state.signUpPhoneNumber} onChange={(e) => setState({ ...state, signUpPhoneNumber: e.target.value })} placeholder="手机号码" /></InputWarapper>

                        {state.signUpPhoneNumber
                            ? <SendMsgWrapper>
                                <InputWarapper text="\e6ca" style={{ margin: '0' }}>
                                    <Input value={state.verifyCode} onChange={(e) => setState({ ...state, verifyCode: e.target.value })} placeholder="输入手机验证码"/>
                                </InputWarapper>
                                <SendMsgBtn>发送验证码</SendMsgBtn>
                            </SendMsgWrapper>
                            : ''
                        }

                        <InputWarapper text="\e60c"><Input value={state.signUpPassword} onChange={(e) => setState({ ...state, signUpPassword: e.target.value })} placeholder="设置密码" type="password"/></InputWarapper>

                        <SubmitBtn onClick={() => handlerSignUpBtn()}>注册</SubmitBtn>
                    </React.Fragment>
                }

            </AccountWrapper>
        </Wrapper>
    )
}

export default LogInAndSignup

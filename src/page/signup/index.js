import React from 'react'
import { LogoDiv, LogoA } from '../home/header/style'

import {
    WrapperHeaderDiv,
    HeaderCenter,
    ToLogIn,
    ContentWrapper,
    AccountWrapper,
    AccountH1,
    Input,
    Role,
    RoleButton1,
    RoleButton2,
    CheckBox,
    SubmitBtn,
    ParterWrapper,
    ParterLogo,
    SvgDiv,
    SvgContent,
    SvgTittle,
    SvgThreeDiv,
    SvgAlone,
    SvgImg,
    SvgText,
    Footer,
    FooterContent,
    FooterLink
} from './style'

const SignUp = function () {
    return (
        <React.Fragment>
            <WrapperHeaderDiv>
                <HeaderCenter>
                    <LogoDiv>
                        <LogoA></LogoA>
                    </LogoDiv>
                    <span style={{ fontSize: '13px', color: '#222', lineHeight: '1.5' }}>Already have an account? <ToLogIn to="/">Log In</ToLogIn></span>
                </HeaderCenter>
            </WrapperHeaderDiv>

            <ContentWrapper>
                <AccountWrapper>
                    <AccountH1>账号注册</AccountH1>
                    <Input placeholder="用户名"/>
                    <Input placeholder="密码"/>
                    <Input placeholder="邮箱"/>
                    <p>我：</p>
                    <Role>
                        <RoleButton1>需要帮助</RoleButton1>
                        <RoleButton2>帮助别人</RoleButton2>
                    </Role>
                    <CheckBox>
                        Yes! Send me genuinely useful emails every now and then to help me get the most out of Upwork.
                    </CheckBox>
                    <CheckBox>
                    Yes, I understand and agree to the Upwork Terms of Service, including the User Agreement and Privacy Policy.
                    </CheckBox>
                    <SubmitBtn>创建账户</SubmitBtn>
                </AccountWrapper>

                <ParterWrapper>
                    Trusted by 5M+ businesses
                    <ParterLogo></ParterLogo>
                </ParterWrapper>

                <SvgDiv>
                    <SvgContent>
                        <SvgTittle>More than 60k jobs are posted on Upwork every week</SvgTittle>
                        <SvgThreeDiv>
                            <SvgAlone>
                                <SvgImg>
                                    <svg viewBox="0 0 145 130" xmlns="http://www.w3.org/2000/svg"><circle cx="72.5" cy="65" fill="#1d4354" r="64.5"></circle><path d="M93.6 104.8h-42c-.5 0-1-.4-1-1v-78c0-.5.4-1 1-1h42c.5 0 1 .4 1 1v78c0 .6-.5 1-1 1z" fill="#e0e0e0"></path><path d="M54.1 35.3H91v59H54.1z" fill="#fff"></path><ellipse cx="67.8" cy="30" fill="#f3756c" rx=".8" ry=".8"></ellipse><path d="M78.1 30.8h-7.4c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h7.4c.4 0 .8.3.8.8s-.4.8-.8.8z" fill="#c4c4c4"></path><path d="M78.6 71.7h-12c-.6 0-1-.4-1-1s.4-1 1-1h12c.6 0 1 .4 1 1s-.5 1-1 1zM81.3 75.7H63.8c-.6 0-1-.4-1-1s.4-1 1-1h17.5c.6 0 1 .4 1 1s-.4 1-1 1z" fill="#d1d1d1"></path><path d="M126.2 91.5H94.3c-.5 0-1-.4-1-1V38.8c0-.5.4-1 1-1h31.9c.5 0 1 .4 1 1v51.7c0 .5-.5 1-1 1z" fill="#fff"></path><path d="M116.3 72.7h-12c-.6 0-1-.4-1-1s.4-1 1-1h12c.6 0 1 .4 1 1s-.5 1-1 1zM119 76.6h-17.5c-.6 0-1-.4-1-1s.4-1 1-1H119c.6 0 1 .4 1 1s-.4 1-1 1z" fill="#e0e0e0"></path><path d="M50.6 91.5H18.8c-.5 0-1-.4-1-1V38.8c0-.5.4-1 1-1h31.9c.5 0 1 .4 1 1v51.7c-.1.5-.5 1-1.1 1z" fill="#fff"></path><path d="M40.7 72.7h-12c-.6 0-1-.4-1-1s.4-1 1-1h12c.6 0 1 .4 1 1s-.4 1-1 1zM43.5 76.6H26c-.6 0-1-.4-1-1s.4-1 1-1h17.5c.6 0 1 .4 1 1s-.5 1-1 1z" fill="#e0e0e0"></path><path d="M61.6 80.6h22.3v6.8H61.6zM83.5 54.9c0 6-4.9 11-11 11-6 0-11-4.9-11-11s4.9-11 11-11c6.1.1 11 5 11 11" fill="#6fda44"></path><path d="M76.3 53.9c0 2-1.6 3.6-3.6 3.6s-3.6-1.6-3.6-3.6 1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6" fill="#34ba08"></path><path d="M72.3 58.9h1-1z" fill="none"></path><path d="M75.9 57.8c-.7.6-1.7 1-2.7 1.1h-1c-1-.1-1.9-.5-2.7-1.1-2.2 1-3.8 2.9-4.3 5.3 1.9 1.7 4.5 2.8 7.3 2.8 3 0 5.6-1.2 7.6-3.1-.5-2.2-2.1-4-4.2-5z" fill="#34ba08"></path><g><path d="M119.1 54.9c0 4.9-4 8.9-8.9 8.9s-8.9-4-8.9-8.9 4-8.9 8.9-8.9c5 .1 8.9 4 8.9 8.9" fill="#e0e0e0"></path><path d="M113.3 54.1c0 1.6-1.3 2.9-2.9 2.9-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9" fill="#b2b2b2"></path><path d="M110 58.2h.8-.8z" fill="none"></path><path d="M113 57.3c-.6.5-1.4.8-2.2.9h-.8c-.8-.1-1.6-.4-2.2-.9-1.7.8-3.1 2.4-3.5 4.3 1.6 1.4 3.6 2.3 5.9 2.3 2.4 0 4.6-1 6.2-2.5-.5-1.9-1.7-3.4-3.4-4.1z" fill="#b2b2b2"></path></g><g><path d="M43.6 54.9c0 4.9-4 8.9-8.9 8.9s-8.9-4-8.9-8.9 4-8.9 8.9-8.9c4.9.1 8.9 4 8.9 8.9" fill="#e0e0e0"></path><path d="M37.8 54.1c0 1.6-1.3 2.9-2.9 2.9-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9" fill="#b2b2b2"></path><path d="M34.5 58.2h.8-.8z" fill="none"></path><path d="M37.5 57.3c-.6.5-1.4.8-2.2.9h-.8c-.8-.1-1.6-.4-2.2-.9-1.7.8-3.1 2.4-3.5 4.3 1.6 1.4 3.6 2.3 5.9 2.3 2.4 0 4.6-1 6.2-2.5-.5-1.9-1.8-3.4-3.4-4.1z" fill="#b2b2b2"></path></g><path d="M90.1 97l-5.2-5.2 4.4-2.8c.1-.1.1-.3-.1-.3l-15.5-5.6c-.1 0-.3.1-.2.2l5.6 15.5c0 .1.2.2.3.1l2.8-4.4 5.2 5.2c.1.1.4.1.5 0l2.2-2.2c.1-.1.1-.3 0-.5z" fill="#33637a"></path></svg>
                                </SvgImg>
                                <SvgText>
                                    <h4 style={{ paddingTop: '10px', paddingBottom: '15px' }}>Find what you need</h4>
                                    <p>Choose from specialized freelancers and agencies with 5,000+ skills.</p>
                                </SvgText>
                            </SvgAlone>
                            <SvgAlone>
                                <SvgImg>
                                    <svg viewBox="0 0 145 130" xmlns="http://www.w3.org/2000/svg"><circle cx="72.5" cy="65" fill="#1d4354" r="64.5"></circle><path d="M72.7 129.5c25.3-.1 47.1-14.7 57.7-35.9l-115.5.3c10.6 21.1 32.5 35.6 57.8 35.6z" fill="#33637a"></path><path d="M92.5 110.9H38.3c-.5 0-1-.4-1-1V20.3c0-.5.4-1 1-1h68.4c.5 0 1 .4 1 1v89.6c0 .5-.4 1-1 1H92.5z" fill="#fff"></path><g fill="#b2b2b2"><path d="M52.1 29.6v3.6c0 .6-.1 1-.5 1.3-.3.3-.7.4-1.2.4-.6 0-1-.2-1.4-.5-.3-.3-.5-.8-.5-1.4h1.3c0 .5.2.7.6.7.3 0 .5-.2.5-.6v-3.6h1.2zM57 29.9c.4.2.7.6 1 1s.3.9.3 1.4c0 .5-.1 1-.4 1.4s-.6.7-1 1-.8.3-1.3.3-.9-.1-1.3-.3-.7-.6-1-1c-.2-.4-.4-.9-.4-1.4 0-.5.1-1 .4-1.4.2-.4.6-.7 1-1s.9-.3 1.3-.3c.5 0 1 .1 1.4.3zm-2.4 1.3c-.2.3-.4.6-.4 1.1 0 .5.1.8.4 1.1.2.3.6.4 1 .4s.7-.1 1-.4c.2-.3.4-.6.4-1.1 0-.5-.1-.8-.4-1.1-.2-.3-.6-.4-1-.4s-.7.1-1 .4zM63.1 32.7c.2.2.3.5.3.8 0 .5-.2.8-.5 1.1s-.7.4-1.3.4h-2.4v-5.3h2.4c.5 0 1 .1 1.2.3.3.2.4.6.4 1 0 .3-.1.6-.3.8-.2.2-.4.3-.7.4.5.1.7.2.9.5zm-2.7-.9h.8c.4 0 .7-.2.7-.6 0-.4-.2-.6-.7-.6h-.8v1.2zm1.7 1.5c0-.2-.1-.3-.2-.4s-.3-.2-.5-.2h-.9v1.2h.9c.4 0 .7-.2.7-.6zM67.2 33.1v1.8h-1.3v-5.3H68c.6 0 1.1.2 1.4.5s.5.7.5 1.3c0 .3-.1.6-.2.9-.1.3-.4.5-.7.6s-.6.2-1 .2h-.8zm1.4-1.7c0-.5-.3-.7-.8-.7h-.6V32h.6c.5 0 .8-.2.8-.6zM74.5 29.9c.4.2.7.6 1 1s.3.9.3 1.4c0 .5-.1 1-.4 1.4s-.6.7-1 1-.7.3-1.2.3-.9-.1-1.3-.3-.7-.6-1-1c-.2-.4-.4-.9-.4-1.4 0-.5.1-1 .4-1.4.2-.4.6-.7 1-1s.9-.3 1.3-.3c.5 0 .9.1 1.3.3zm-2.3 1.3c-.2.3-.4.6-.4 1.1 0 .5.1.8.4 1.1.2.3.6.4 1 .4s.7-.1 1-.4c.2-.3.4-.6.4-1.1 0-.5-.1-.8-.4-1.1-.2-.3-.6-.4-1-.4s-.8.1-1 .4zM80.3 34.2c-.1.2-.3.4-.6.6s-.6.2-1 .2c-.6 0-1.1-.1-1.5-.4s-.6-.7-.6-1.2H78c0 .2.1.4.2.5.1.1.3.2.5.2s.3 0 .4-.1c.1-.1.1-.2.1-.4 0-.1 0-.2-.1-.3-.1-.1-.2-.2-.3-.2-.1-.1-.3-.1-.5-.2-.3-.1-.6-.2-.8-.3s-.4-.3-.5-.5c-.2-.2-.2-.5-.2-.8 0-.3.1-.6.2-.8.2-.2.4-.4.7-.5.3-.1.6-.2 1-.2.6 0 1.1.1 1.4.4s.5.7.6 1.1h-1.4c0-.2-.1-.3-.2-.4s-.2-.2-.4-.2c-.1 0-.3 0-.4.1s-.3.1-.3.2 0 .2.1.3c.1.1.2.2.3.2s.3.1.5.2c.3.1.6.2.8.3.2.1.4.3.6.5.2.2.2.5.2.8 0 .4 0 .7-.2.9zM85.2 29.6v1h-1.4v4.2h-1.3v-4.2h-1.4v-1h4.1z"></path></g><g fill="#c4c4c4"><path d="M95.8 59H56.3c-.6 0-1-.4-1-1s.4-1 1-1h39.5c.6 0 1 .4 1 1s-.5 1-1 1z"></path><circle cx="49.6" cy="58" r="1.2"></circle><path d="M95.5 82H56.3c-.6 0-1-.4-1-1s.4-1 1-1h39.2c.6 0 1 .4 1 1s-.4 1-1 1z"></path><circle cx="49.6" cy="81" r="1.2"></circle><g><path d="M95.2 74.4H56.3c-.6 0-1-.4-1-1s.4-1 1-1h38.9c.6 0 1 .4 1 1s-.4 1-1 1z"></path><circle cx="49.6" cy="73.4" r="1.2"></circle></g><g><path d="M95.2 66.7H56.3c-.6 0-1-.4-1-1s.4-1 1-1h38.9c.6 0 1 .4 1 1s-.4 1-1 1z"></path><circle cx="49.6" cy="65.7" r="1.2"></circle></g></g><path d="M48.4 91.8h30.1v9.1H48.4z" fill="#6fda44"></path><path d="M48.4 43.5h23.4v4.6H48.4z" fill="#e0e0e0"></path></svg>                                </SvgImg>
                                <SvgText>
                                    <h4 style={{ paddingTop: '10px', paddingBottom: '15px' }}>Find what you need</h4>
                                    <p>Choose from specialized freelancers and agencies with 5,000+ skills.</p>
                                </SvgText>
                            </SvgAlone>
                            <SvgAlone last="true">
                                <SvgImg>
                                    <svg viewBox="0 0 145 130" xmlns="http://www.w3.org/2000/svg"><path d="M140 65c0 35.6-28.9 64.5-64.5 64.5S11 100.6 11 65 39.9.5 75.5.5 140 29.4 140 65" fill="#1d4354"></path><path d="M75.7 129.5c25.3-.1 47.1-14.7 57.7-35.9l-115.5.3c10.6 21.1 32.5 35.6 57.8 35.6M56.6 61.1L23.3 87c-.5.4-1.3.3-1.7-.2L5.2 65.7c-.4-.5-.3-1.3.2-1.7l33.2-25.9c.5-.4 1.3-.3 1.7.2l16.4 21.1c.5.5.4 1.3-.1 1.7z" fill="#33637a"></path><ellipse cx="32" cy="62.6" fill="#1d4354" rx="3.9" ry="3.9" transform="rotate(-87.625 32.024 62.581) scale(.99996)"></ellipse><path d="M49 95.8v12.6c0 .6.5 1.1 1.1 1.1h64.4c.6 0 1.1-.5 1.1-1.1V22.9c0-.6-.5-1.1-1.1-1.1H50.1c-.6 0-1.1.5-1.1 1.1v45.5" fill="#6fda44"></path><path d="M62.7 43.7c-1.4-.2-2.5-.7-3.5-1.5l1.1-1.8c.8.6 1.7 1.1 2.4 1.3v-2.5c-2.1-.6-2.8-1.5-2.8-3.3 0-1.7 1.4-2.8 2.8-3v-1h2.1v1c.7.2 1.9.6 2.7 1.1l-.9 2c-.6-.4-1.8-.7-1.8-.9v2.3c2.1.6 2.8 1.6 2.8 3.3 0 1.7-1.4 2.8-2.8 3v1.5h-2.1v-1.5zm0-8.8c-.7.1-.7.5-.7 1s0 .8.7 1.1v-2.1zm2.8 6c0-.6 0-.9-.7-1.2v2.2c.7-.2.7-.5.7-1z" fill="#34ba08"></path><g fill="#fff"><path d="M78 36.6v5.1h-1.2v-5.1H78zM83.5 41.7h-1.2l-2.1-3.1v3.1H79v-5.1h1.2l2.1 3.2v-3.2h1.2v5.1zM85.3 36.6l1.3 3.9 1.3-3.9h1.3l-1.8 5.1h-1.6L84 36.6h1.3zM93.3 36.8c.4.2.7.5.9.9.2.4.3.8.3 1.4s-.1 1-.3 1.4-.5.7-.9.9c-.4.2-.8.3-1.3.3s-.9-.1-1.3-.3c-.4-.2-.7-.5-.9-.9s-.3-.9-.3-1.4.1-1 .3-1.4.5-.7.9-.9.8-.3 1.3-.3.9.1 1.3.3zM91 38.1c-.2.3-.4.6-.4 1.1 0 .4.1.8.4 1.1.2.3.6.4 1 .4s.7-.1 1-.4c.2-.3.4-.6.4-1.1 0-.4-.1-.8-.4-1.1-.2-.3-.6-.4-1-.4s-.7.1-1 .4zM96.5 36.6v5.1h-1.2v-5.1h1.2zM101.3 37.1c.4.3.7.8.8 1.4h-1.3c-.1-.2-.2-.4-.4-.6-.2-.1-.4-.2-.7-.2-.4 0-.7.1-.9.4s-.3.6-.3 1.1c0 .4.1.8.3 1.1s.5.4.9.4c.3 0 .5-.1.7-.2.2-.1.3-.3.4-.6h1.3c-.1.6-.4 1-.8 1.4s-1 .5-1.6.5c-.5 0-.9-.1-1.3-.3-.4-.2-.7-.5-.9-.9-.2-.4-.3-.8-.3-1.4 0-.5.1-1 .3-1.4.2-.4.5-.7.9-.9.4-.2.8-.3 1.3-.3.7-.1 1.2.1 1.6.5zM104.1 37.6v1.1h1.7v.9h-1.7v1.1h2v1h-3.2v-5.1h3.2v1h-2z"></path></g><g fill="#34ba08"><path d="M105.8 62.2H59.9c-.6 0-1-.4-1-1s.4-1 1-1h45.9c.6 0 1 .4 1 1s-.5 1-1 1zM105.8 68.6H59.9c-.6 0-1-.4-1-1s.4-1 1-1h45.9c.6 0 1 .4 1 1s-.5 1-1 1zM105.8 75.1H59.9c-.6 0-1-.4-1-1s.4-1 1-1h45.9c.6 0 1 .4 1 1s-.5 1-1 1zM105.8 81.5H59.9c-.6 0-1-.4-1-1s.4-1 1-1h45.9c.6 0 1 .4 1 1s-.5 1-1 1zM105.8 88H86.5c-.6 0-1-.4-1-1s.4-1 1-1h19.3c.6 0 1 .4 1 1s-.5 1-1 1zM105.3 55.7H59.9c-.6 0-1-.4-1-1s.4-1 1-1h45.5c.6 0 1 .4 1 1s-.5 1-1.1 1z"></path><path d="M95.7 74.7c-.6 0-1-.4-1-1V55.1c0-.6.4-1 1-1s1 .4 1 1v18.5c0 .6-.5 1.1-1 1.1z"></path></g><g><path d="M70.9 93.4l-41.7 6c-.7.1-1.3-.4-1.4-1L24 71.9c-.1-.7.4-1.3 1-1.4l41.7-6c.7-.1 1.3.4 1.4 1L71.9 92c.1.7-.3 1.3-1 1.4z" fill="#fff"></path><path d="M69.6 76.1l-44.7 6.5-.9-6.3 44.7-6.6z" fill="#1d4354"></path><path d="M38.2 92.7c-.4 0-.7-.3-.7-.6-.1-.4.2-.8.6-.8l22-3.3c.4-.1.8.2.8.6.1.4-.2.8-.6.8l-22.1 3.2v.1zM58.4 84.3c-.4 0-.7-.3-.7-.6-.1-.4.2-.8.6-.8l6.3-.9c.4-.1.8.2.8.6.1.4-.2.8-.6.8l-6.3.9h-.1z" fill="#c4c4c4"></path></g></svg>                                </SvgImg>
                                <SvgText>
                                    <h4 style={{ paddingTop: '10px', paddingBottom: '15px' }}>Find what you need</h4>
                                    <p>Choose from specialized freelancers and agencies with 5,000+ skills.</p>
                                </SvgText>
                            </SvgAlone>
                        </SvgThreeDiv>
                    </SvgContent>
                </SvgDiv>
            </ContentWrapper>

            <Footer>
                <FooterContent>
                    <p style={{ paddingTop: '10px', paddingBottom: '20px' }}> © 2015 - 2020 Upwork® Global Inc.</p>
                    <FooterLink >Terms of Service</FooterLink>
                    <FooterLink >Privacy Policy</FooterLink>
                    <FooterLink >Accessibility</FooterLink>
                </FooterContent>
            </Footer>
        </React.Fragment>
    )
}

export default SignUp

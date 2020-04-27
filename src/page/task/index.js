import React, { Fragment } from 'react'
import {
    CenterDiv,
    LogoA,
    LogoDiv,
    OperationDiv, Post, PostDiv,
    SignAndLog, SignAndLogDiv, WrapperDiv
} from '../home/header/style'

import {
    useHistory, Link,
    useParams
} from 'react-router-dom'

import { action } from './redact'
import { connect } from 'react-redux'

import {
    Layout,
    Center,
    SubCenter,
    BackDrop,
    Slide,
    DtailWrapperDiv,
    DetailHeader,
    DetailDiv,
    DetailBody,
    DetailTittle,
    DetailTextWrapper,
    DetailProps,
    DetailText
} from './styled'

import Left from './left'
import FindWork from './findWork'
import ContentCenter from './center'
import Right from './right'
import PropTypes from 'prop-types'

const Task = function (props) {
    let subPage
    const { router } = useParams()
    switch (router) {
    case 'mytask' :subPage = { id: 1, router: 'mytask', text: '我的任务' }; break
    case 'recommend':subPage = { id: 2, router: 'recommend', text: '推荐' }; break
    case 'like':subPage = { id: 3, router: 'like', text: '喜欢' }; break
    case 'software':subPage = { id: 4, router: 'software', text: '程序开发' }; break
    case 'ai':subPage = { id: 5, router: 'ai', text: '人工智能' }; break
    case 'img':subPage = { id: 6, router: 'img', text: '图像处理' }; break
    case 'datacollection':subPage = { id: 7, router: 'datacollection', text: '数据采集' }; break
    case 'dataanalyze':subPage = { id: 8, router: 'dataanalyze', text: '数据分析' }; break
    default: subPage = { id: 2, router: 'recommend', text: '推荐任务' }; break
    }
    const taskId = null
    props.handlerOpen(taskId)

    const history = useHistory()

    function HandlerClick () {
        history.goBack()
    }

    const state = {
        isloged: true
    }
    // const [state,setState] = useState({
    //     isloged:true
    // })

    // useEffect(()=>{
    //     axios({
    //         url:"/getuserinfo",
    //         baseURL:"http://localhost:8000",
    //         method:"GET",
    //         withCredentials:true,   //cookie 相关  如不设置  无法发送cookie
    //     }).then(res => {
    //         const data = res.data;
    //         if (data.code===200){
    //             setState({...state,isloged: true})
    //         }
    //     })
    //     // eslint-disable-next-line
    // },[])

    return (
        <Fragment>
            <Layout>
                <WrapperDiv>
                    <CenterDiv>
                        <LogoDiv>
                            <LogoA to={'/'}/>
                        </LogoDiv>
                        <OperationDiv>
                            <SignAndLogDiv>
                                {state.isloged
                                    ? ''
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
                </WrapperDiv>

                <Center>
                    <FindWork/>
                    <SubCenter>
                        <Left subPageid={subPage.id}/>
                        <ContentCenter subPage={ subPage }/>
                        <Right/>
                    </SubCenter>
                </Center>
            </Layout>
            <BackDrop onClick={() => HandlerClick()} className={taskId ? 'open' : ''}/>
            <Slide className={taskId ? 'open' : ''}>
                <DtailWrapperDiv >
                    <DetailHeader><Link to="/task">返回</Link><Link to={'/'}>分享</Link></DetailHeader>
                    <DetailDiv>
                        <DetailBody>
                            <DetailTittle>Client Support Consultant</DetailTittle>
                            <DetailTextWrapper>
                                <DetailProps>
                        工作内容:
                                </DetailProps>
                                <DetailText>  {`hafeuh
                    afeofhe
                    eafoehnafeiagfhjeogherugheruighreiuhguirhgiusegbnjreghuuuuuuuuuuuuuuuuuuuuuuuuuuuugsdbnsdfbn`}
                                </DetailText>
                            </DetailTextWrapper>
                            <DetailTextWrapper>
                                <DetailProps>
                        交付成果:
                                </DetailProps>
                                <DetailText>  {`hafeuh
                    afeofhe
                    eafoehnafeiagfhjeogherugheruighreiuhguirhgiusegbnjreghuuuuuuuuuuuuuuuuuuuuuuuuuuuugsdbnsdfbn`}
                                </DetailText>
                            </DetailTextWrapper>
                            <DetailTextWrapper >
                                <DetailProps>
                        补充:
                                </DetailProps>
                                <DetailText>  {`hafeuh
                    afeofhe
                    eafoehnafeiagfhjeogherugheruighreiuhguirhgiusegbnjreghuuuuuuuuuuuuuuuuuuuuuuuuuuuugsdbnsdfbn`}
                                </DetailText>
                            </DetailTextWrapper>
                            <DetailTextWrapper className="noborder">
                                <DetailProps>
                        需要的技术:
                                </DetailProps>
                                <DetailText>  {`hafeuh
                    afeofhe
                    eafoehnafeiagfhjeogherugheruighreiuhguirhgiusegbnjreghuuuuuuuuuuuuuuuuuuuuuuuuuuuugsdbnsdfbn`}
                                </DetailText>
                            </DetailTextWrapper>
                        </DetailBody>
                    </DetailDiv>
                </DtailWrapperDiv>
            </Slide>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    handlerOpen (taskId) {
        if (taskId) {
            dispatch(action.isOpen('hidden'))
        } else if (!taskId) {
            dispatch(action.isOpen('auto'))
        }
    }

})

Task.propTypes = {
    handlerOpen: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Task)

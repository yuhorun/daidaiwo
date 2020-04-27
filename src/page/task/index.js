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
import ContentCenter from './center'
import Right from './right'

const Task = function (props) {
    let subPageid
    const { subpage } = useParams()
    switch (subpage) {
    case 'mytask' :subPageid = 1; break
    case 'recommend':subPageid = 2; break
    case 'like':subPageid = 3; break
    case 'software':subPageid = 4; break
    case 'ai':subPageid = 5; break
    case 'img':subPageid = 6; break
    case 'datacollection':subPageid = 7; break
    case 'dataanalyze':subPageid = 8; break
    default:subPageid = 2; break
    }
    const taskId = null
    // eslint-disable-next-line react/prop-types
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
                            <LogoA/>
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
                    <SubCenter>
                        <Left subPageid={subPageid}/>
                        <ContentCenter/>
                        <Right/>
                    </SubCenter>
                </Center>
            </Layout>
            <BackDrop onClick={HandlerClick} className={taskId ? 'open' : ''}/>
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

}
)
export default connect(null, mapDispatchToProps)(Task)

import React from 'react'
import axios from 'axios'

import {
    Wrapper,
    WrapperHeaderDiv,
    HeaderCenter,
    LogoDiv,
    LogoA,
    ContentWrapper,
    ContentCenter,
    StepDiv,
    StepHeader,
    StepContent,
    DoWhat,
    TextArea,
    DoWhatInput,
    DropDownDiv,
    DropDownBtn,
    OptionDiv,
    Option,
    AddQuestionDiv,
    AddQuestionBtn,
    Question,
    DelQuestionBtn,
    QuestionText,
    AddAndSubtractWarpper,
    AddAndSubtractDiv,
    AddAndSubtractText,
    AddAndSubtractBtn,
    SubmitBtn
} from './style'

const Post = function () {
    const categoryList = ['程序开发', '人工智能', '图像处理', '数据采集', '数据分析', '不确定']
    const [state, setState] = React.useState({
        categoryDisplay: '',
        tittle: '',
        categoryIndex: 0,
        detail: '',
        categoryValue: '点击选择类别',
        questionInputValue: '',
        questionList: [],
        tperiod: 7,
        addition: ''
    })
    const handlerBtn = () => {
        if (state.categoryDisplay === '') {
            setState({ ...state, categoryDisplay: 'open' })
        } else if (state.categoryDisplay === 'open') {
            state.categoryDisplay = ''
            setState({ ...state, categoryDisplay: '' })
        }
    }

    const handlerDelBtn = function (index) {
        const newList = [...state.questionList]
        newList.splice(index, 1)
        setState({ ...state, questionList: newList })
    }

    const handlerSubmitBtn = function () {
        const task = {
            tittle: state.tittle,
            category: state.categoryIndex,
            detail: state.detail,
            question: state.questionList.join('|||'),
            tperiod: state.tperiod,
            addition: state.addition
        }

        axios({
            url: '/post',
            baseURL: 'http://localhost:8000',
            method: 'POST',
            data: JSON.stringify(task),
            withCredentials: true // 发送cookie
        }).then(
            res => {
                const data = res.data
                console.log(data.code)
            }
        )
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

            <ContentWrapper>
                <ContentCenter>
                    <StepDiv>
                        <StepHeader>
                            <h2>第一步：任务概述</h2>
                        </StepHeader>
                        <StepContent>
                            <DoWhat>输入您的任务标题</DoWhat>
                            <DoWhatInput onChange={(e) => { setState({ ...state, tittle: e.target.value }) }}/>
                            <DoWhat>示例：</DoWhat>
                            <ul style={{ marginLeft: '30px', fontSize: '13px', color: '#222' }}>
                                <li style={{ paddingBottom: '5px' }}>人脸数据采集</li>
                                <li style={{ paddingBottom: '5px' }}>短视频app开发</li>
                                <li style={{ paddingBottom: '5px' }}>高速公路场景下车辆识别</li>
                            </ul>
                            <DoWhat style={{ marginTop: '10px' }}>选择类别：</DoWhat>
                            <DropDownDiv>
                                <DropDownBtn onClick={() => handlerBtn()}>{state.categoryValue}</DropDownBtn>
                                <OptionDiv className={state.categoryDisplay}>
                                    {categoryList.map((value, index) => {
                                        return (
                                            <Option key={index} onClick={() => setState({ ...state, categoryValue: value, categoryIndex: index + 1, categoryDisplay: '' })}>{value}</Option>
                                        )
                                    })}
                                </OptionDiv>
                            </DropDownDiv>
                        </StepContent>
                    </StepDiv>

                    <StepDiv>
                        <StepHeader>
                            <h2>第二步：任务详情</h2>
                        </StepHeader>

                        <StepContent>
                            <DoWhat>在下面框内输入您的任务详情  包括：</DoWhat>
                            <ul style={{ marginBottom: '20px', marginLeft: '30px', fontSize: '13px', color: '#222' }}>
                                <li style={{ paddingBottom: '5px' }}>实现哪些功能 </li>
                                <li style={{ paddingBottom: '5px' }}>基于什么技术 </li>
                                <li style={{ paddingBottom: '5px' }}>交付内容包括哪些 </li>
                            </ul>
                            <TextArea onChange={(e) => setState({ ...state, detail: e.target.value })}/>

                            <DoWhat>相关提问（可选）</DoWhat>
                            <ul style={{ marginBottom: '0px', marginLeft: '30px', fontSize: '13px', color: '#222' }}>
                                <li style={{ paddingBottom: '5px' }}>你有相关的工作经验么？介绍一下。 </li>
                                <li style={{ paddingBottom: '5px' }}>我这个项目你打算怎么做，整体的流程是什么？ </li>
                            </ul>
                            <AddQuestionDiv>
                                <div>
                                    <DoWhatInput value={state.questionInputValue} onChange={(e) => setState({ ...state, questionInputValue: e.target.value })} />
                                    <AddQuestionBtn onClick={() => setState({ ...state, questionList: [...state.questionList, state.questionInputValue], questionInputValue: '' })}> 添加问题 </AddQuestionBtn>
                                </div>
                                {
                                    state.questionList.map((value, index) => {
                                        return <Question key={index}>
                                            <DelQuestionBtn onClick={() => handlerDelBtn(index)}>删除</DelQuestionBtn>
                                            <QuestionText ><strong>问题{index + 1}：</strong>{value}</QuestionText>
                                        </Question>
                                    })
                                }
                            </AddQuestionDiv>
                        </StepContent>
                    </StepDiv>

                    <StepDiv>
                        <StepHeader>
                            <h2>第三步：任务要求</h2>
                        </StepHeader>

                        <StepContent>
                            <DoWhat>时间安排:</DoWhat>
                            <AddAndSubtractWarpper>
                                <p>我想要在</p>
                                <AddAndSubtractDiv>
                                    <AddAndSubtractBtn onClick={() => setState({ ...state, tperiod: state.tperiod - 1 })}>-</AddAndSubtractBtn>
                                    <AddAndSubtractText>
                                        {state.tperiod}
                                    </AddAndSubtractText>
                                    <AddAndSubtractBtn onClick={() => setState({ ...state, tperiod: state.tperiod + 1 })}>+</AddAndSubtractBtn>
                                </AddAndSubtractDiv>
                                <p>内完成</p>
                            </AddAndSubtractWarpper>

                            <DoWhat>备注（可选）</DoWhat>
                            <TextArea onChange={(e) => setState({ ...state, addition: e.target.value })} />
                        </StepContent>

                        <StepHeader style={{ borderTop: '1px solid #E0E0E0' }}>
                            <SubmitBtn onClick={() => handlerSubmitBtn()}>提交</SubmitBtn>
                            <SubmitBtn className="cancel">取消</SubmitBtn>
                        </StepHeader>
                    </StepDiv>
                </ContentCenter>
            </ContentWrapper>
        </Wrapper>
    )
}

export default Post

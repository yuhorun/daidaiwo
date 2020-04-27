import React, { useEffect } from 'react'
import {
    FlexDiv,
    BorderDiv,
    Tittle,
    Text,
    TaskWraper,
    TaskTittleDiv,
    TaskTittleA,
    Btn,
    TaskDetailDiv,
    DetalText,
    DetailCategory,
    DetailEnd,
    MoreA,
    CategoryItem
} from './style'
import PropTypes from 'prop-types'
import axios from 'axios'

const ContentCenter = (props) => {
    // const taskList = [{
    //     tittle: '',
    //     detailText: '',
    //     categories: [],
    //     time: 0,
    //     lookman: 0,
    //     competeman: 0
    // }]
    let taskList = [{}, {}, {}, {}, {}]
    const getTaskList = () => {
        axios({
            url: props.subPage.router,
            baseURL: 'http://localhost:8000/task',
            method: 'GET',
            withCredentials: true
        }).then(
            res => {
                if (res.data.code === 208) {
                    taskList = res.data.taskList
                }
            }
        )
    }

    useEffect(() => {
        getTaskList()
        // eslint-disable-next-line
    }, [])

    return (
        <FlexDiv>
            <BorderDiv>
                <Tittle>
                    <Text>{props.subPage.text}</Text>
                </Tittle>

                <TaskWraper>
                    <TaskTittleDiv>
                        <TaskTittleA>高速公路场景下车辆检测</TaskTittleA>
                        <Btn >&#xe60d;</Btn>
                    </TaskTittleDiv>
                    <TaskDetailDiv>
                        <DetalText>我们是做无人智能驾驶的, 高速公路场景下车辆检测高速公路场景下车辆检测高速公
                            路场景下车辆检测. 高速公路场景下车辆检测高速公路场景下车辆检测,
                            高速公路场景下车辆检测高速公路场景下车辆检测高速公路场景下车辆检测
                            高速公路场景下车辆.检测高速公路场景下车辆检测高速公路场景下车辆检测...<MoreA>查看更过</MoreA>
                        </DetalText>
                    </TaskDetailDiv>
                    <DetailCategory>
                        <CategoryItem>神经网络</CategoryItem>
                        <CategoryItem>TensorFlow</CategoryItem>
                        <CategoryItem>python</CategoryItem>
                    </DetailCategory>
                    <DetailEnd>发布时间:<strong> 6</strong>天前&emsp;浏览人数:<strong> 18</strong>&emsp;竞标人数:<strong> 3</strong></DetailEnd>
                </TaskWraper>

                {
                    taskList.map((value, index) => {
                        return (
                            <TaskWraper key={index}>
                                <TaskTittleDiv>
                                    <TaskTittleA>高速公路场景下车辆检测</TaskTittleA>
                                    <Btn >&#xe60d;</Btn>
                                </TaskTittleDiv>
                                <TaskDetailDiv>
                                    <DetalText>我们是做无人智能驾驶的, 高速公路场景下车辆检测高速公路场景下车辆检测高速公
                                        路场景下车辆检测. 高速公路场景下车辆检测高速公路场景下车辆检测,
                                        高速公路场景下车辆检测高速公路场景下车辆检测高速公路场景下车辆检测
                                        高速公路场景下车辆.检测高速公路场景下车辆检测高速公路场景下车辆检测...<MoreA>查看更过</MoreA>
                                    </DetalText>
                                </TaskDetailDiv>
                                <DetailCategory>
                                    <CategoryItem>神经网络</CategoryItem>
                                    <CategoryItem>TensorFlow</CategoryItem>
                                    <CategoryItem>python</CategoryItem>
                                </DetailCategory>
                                <DetailEnd>发布时间:<strong> 6</strong>天前&emsp;浏览人数:<strong> 18</strong>&emsp;竞标人数:<strong> 3</strong></DetailEnd>
                            </TaskWraper>
                        )
                    })
                }

            </BorderDiv>
        </FlexDiv>
    )
}

ContentCenter.propTypes = {
    subPage: PropTypes.object
}

export default ContentCenter

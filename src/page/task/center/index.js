import React from 'react'
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

class ContentCenter extends React.Component {
    render () {
        return (
            <FlexDiv>
                <BorderDiv>
                    <Tittle>
                        <Text>Recommended Jobs</Text>
                    </Tittle>

                    <TaskWraper>
                        <TaskTittleDiv>
                            <TaskTittleA>transfer learning with CNN</TaskTittleA>
                            <Btn >&#xe60d;</Btn>
                        </TaskTittleDiv>
                        <TaskDetailDiv>
                            <DetalText>I want to to create a demo project of transfer
                                learning with proper evaluation. Ideally I want the test accuracy on
                                a popular image classification dataset (such as MS COCO) by a pretrained CNN
                                (such as Keras Inception) as part of transfer learning.
                                I want one of the Keras shipped model that can flexibly trained on other
                                image classification  dataset. Although I want pretrainted model for minimal
                                training hassle...<MoreA>查看更过</MoreA>
                            </DetalText>
                        </TaskDetailDiv>
                        <DetailCategory>
                            <CategoryItem>Deep Neural Networks</CategoryItem>
                            <CategoryItem>TensorFlow</CategoryItem>
                            <CategoryItem>Neural Networks</CategoryItem>
                        </DetailCategory>
                        <DetailEnd>发布时间:<strong>6</strong>天前&emsp;浏览人数:<strong>18</strong>&emsp;竞标人数:<strong>3</strong></DetailEnd>
                    </TaskWraper>

                    <TaskWraper>
                        <TaskTittleDiv>
                            <TaskTittleA>transfer learning with CNN</TaskTittleA>
                            <Btn >&#xe60d;</Btn>
                        </TaskTittleDiv>
                        <TaskDetailDiv>
                            <DetalText>I want to to create a demo project of transfer
                                learning with proper evaluation. Ideally I want the test accuracy on
                                a popular image classification dataset (such as MS COCO) by a pretrained CNN
                                (such as Keras Inception) as part of transfer learning.
                                I want one of the Keras shipped model that can flexibly trained on other
                                image classification  dataset. Although I want pretrainted model for minimal
                                training hassle...<MoreA>查看更过</MoreA>
                            </DetalText>
                        </TaskDetailDiv>
                        <DetailCategory>
                            <CategoryItem>Deep Neural Networks</CategoryItem>
                            <CategoryItem>TensorFlow</CategoryItem>
                            <CategoryItem>Neural Networks</CategoryItem>
                        </DetailCategory>
                        <DetailEnd>发布时间:<strong>6</strong>天前&emsp;浏览人数:<strong>18</strong>&emsp;竞标人数:<strong>3</strong></DetailEnd>
                    </TaskWraper>

                    <TaskWraper>
                        <TaskTittleDiv>
                            <TaskTittleA>transfer learning with CNN</TaskTittleA>
                            <Btn >&#xe60d;</Btn>
                        </TaskTittleDiv>
                        <TaskDetailDiv>
                            <DetalText>I want to to create a demo project of transfer
                                learning with proper evaluation. Ideally I want the test accuracy on
                                a popular image classification dataset (such as MS COCO) by a pretrained CNN
                                (such as Keras Inception) as part of transfer learning.
                                I want one of the Keras shipped model that can flexibly trained on other
                                image classification  dataset. Although I want pretrainted model for minimal
                                training hassle...<MoreA>查看更过</MoreA>
                            </DetalText>
                        </TaskDetailDiv>
                        <DetailCategory>
                            <CategoryItem>Deep Neural Networks</CategoryItem>
                            <CategoryItem>TensorFlow</CategoryItem>
                            <CategoryItem>Neural Networks</CategoryItem>
                        </DetailCategory>
                        <DetailEnd>发布时间:<strong>6</strong>天前&emsp;浏览人数:<strong>18</strong>&emsp;竞标人数:<strong>3</strong></DetailEnd>
                    </TaskWraper>

                </BorderDiv>
            </FlexDiv>
        )
    }
}

export default ContentCenter

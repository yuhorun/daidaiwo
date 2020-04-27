import React from 'react'

import {
    WrapperDiv,
    TextDiv,
    SearchDiv,
    InputAndBtnDiv,
    Input,
    Btn
} from './style'

const FindWork = () => {
    return (
        <WrapperDiv>
            <TextDiv/>
            <SearchDiv>
                <InputAndBtnDiv>
                    <Input text = "输入要查找的关键词"/>
                    <Btn to={'/task'}><i className="iconfont">&#xe65a;</i></Btn>
                </InputAndBtnDiv>
            </SearchDiv>
        </WrapperDiv>
    )
}

export default FindWork

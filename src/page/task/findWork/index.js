import React from 'react'

import {
    WrapperDiv,
    TextDiv,
    SearchDiv,
    InputAndBtnDiv,
    Input,
    Btn
} from "./style"

class FindWork extends React.Component{
    render(){
        return(
            <WrapperDiv>
                <TextDiv>Find Work</TextDiv>
                <SearchDiv>
                    <InputAndBtnDiv>
                        <Input/>
                        <Btn><i className="iconfont">&#xe65a;</i></Btn>
                    </InputAndBtnDiv>
                </SearchDiv>
            </WrapperDiv>
        )
    }
}

export default FindWork
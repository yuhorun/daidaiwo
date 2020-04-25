import React from 'react'
import img from "../../../statics/image/avatar.jpg"
import {Wrapper,
    AvatarDiv
} from './style'

class Right extends React.Component{
    render(){
        return(
            <Wrapper>
                <AvatarDiv src={img}></AvatarDiv>
            </Wrapper>
        )
    }

}

export default Right
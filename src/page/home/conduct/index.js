import React, { Component } from 'react'
import { Post } from '../../../common/header/style'

import {
    BackgroundImageDiv,
    TextDiv,
    TittleSpan,
    SubTittleSpan,
    ButtonDiv,
    SignDiv
} from './style'

class Conduct extends Component {
    render () {
        return (
            <BackgroundImageDiv>
                <TextDiv>
                    <TittleSpan>In-demand talent</TittleSpan>
                    <TittleSpan>on demand.</TittleSpan>
                    <TittleSpan style={{ color: '#fff', marginBottom: '20px' }}>Upwork is how</TittleSpan>
                    <SubTittleSpan>Upwork expertly connects professionals and agencies to businesses seeking specialized talent.</SubTittleSpan>
                    <ButtonDiv>
                        <Post to="/task" style={{ display: 'inline-block', padding: '9px 20px 12px', marginLeft: '0', fontWeight: '600' }}>Get Started</Post>
                        <Post to="/task" style = {{ display: 'inline-block', padding: '9px 20px 12px', marginLeft: '40px', color: '#37a000', fontWeight: '600', backgroundColor: '#fff', borderColor: 'transparent' }}>Get Started</Post>
                    </ButtonDiv>
                </TextDiv>
                <SignDiv><strong style= {{ display: 'inline-block', color: '#fff', fontSize: '13px' }}>Jay C. | Top Rated Designer</strong></SignDiv>
            </BackgroundImageDiv>
        )
    }
}

export default Conduct

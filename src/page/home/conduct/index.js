import React from 'react'

import {
    BackgroundImageDiv,
    TextDiv,
    TittleSpan,
    Btn
} from './style'

const Conduct = () => {
    return (
        <BackgroundImageDiv>
            <TextDiv>
                <TittleSpan>专业代做</TittleSpan>
                <TittleSpan>老司机开车</TittleSpan>
                <TittleSpan style={{ color: '#fff', marginTop: '20px' }}>没时间解释了</TittleSpan>
                <TittleSpan style={{ color: '#fff' }}>上车吧</TittleSpan>

                <div style={{ marginTop: '40px' }}>
                    <Btn to="/task">我是司机</Btn>
                    <Btn to="/task" className={'passenger'}>我是乘客</Btn>
                </div>

            </TextDiv>
        </BackgroundImageDiv>
    )
}

export default Conduct

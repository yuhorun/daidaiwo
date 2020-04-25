import React from 'react'
import { Link } from 'react-router-dom'
import {
    Wrapper,
    BackTittle
} from './style'

const Detail = function(){
    return (
        <Wrapper>
            <BackTittle>
                <Link to="/task">Back</Link>
                <Link to="/task">Share</Link>
            </BackTittle>
        </Wrapper>
    )
    
}

export default Detail
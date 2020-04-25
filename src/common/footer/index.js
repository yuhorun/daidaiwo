import React from 'react'

import {
    FooterWrapper,
    FooterContent,
    FooterLink
} from './style'

const Footer = function () {
    return (
        <React.Fragment>
            <FooterWrapper>
                <FooterContent>
                    <p style={{ paddingTop: '10px', paddingBottom: '20px' }}> © 中沧科技 </p>
                    <FooterLink to={'/'} >关于带带我</FooterLink>
                    <FooterLink to={'/'}>服务条款</FooterLink>
                    <FooterLink to={'/'}>联系我们</FooterLink>
                </FooterContent>
            </FooterWrapper>
        </React.Fragment>
    )
}

export default Footer

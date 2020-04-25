import React from 'react'
import Header from '../../common/header'
import Conduct from './conduct'
import Category from './category'

import {
    Layout,
    Content
} from './styled'
import Footer from '../../common/footer'

const Home = () => (
    <Layout>
        <Header />
        <Content>
            <Conduct />
            <Category />
        </Content>
        <Footer/>
    </Layout>
)

export default Home

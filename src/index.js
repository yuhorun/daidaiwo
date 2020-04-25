import React from 'react'
import axios from 'axios'
import reactDOM from 'react-dom'
import { Provider } from 'react-redux'

import GlobalStyle from './style'
import store from './store'
import Routers from './router'
import { GlobalAction } from './redact'

reactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <Routers />
    </Provider>,
    document.getElementById('root'),
    () => {
        axios({
            url: '/getuserinfo',
            baseURL: 'http://localhost:8000',
            method: 'GET',
            withCredentials: true // cookie 相关  如不设置  无法发送cookie
        }).then(res => {
            if (res.data.code === 200) {
                store.dispatch(GlobalAction.isLoged(true)) // 调用dispatch有几种方式  可以通过store的dispatch直接调用
            }
        })
    }
)

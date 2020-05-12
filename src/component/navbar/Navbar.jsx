import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import jsCookie from 'js-cookie'

import { clearfix } from '@utils/styleMixins'
import { logout } from '@service'
import { actionLogout } from '@actions/user'

import ImgLogo from '@assets/images/img-logo.png'

const NavBar = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLogout = async (e) => {
        console.log('akldnf')
        e.preventDefault()
        const data = await logout()
        if(!data.success) {
            console.error('登出失敗')
            return
        }
        dispatch(actionLogout())
        jsCookie.remove('loginUId')
        history.push('/')
    }
    return (
        <nav className={`${props.className} gradient01`}>
            <div className="navbox">
                <Link to="/">
                    <h1><p>始壯哥</p></h1>
                </Link>
                <Switch>
                    <Route path="/admin">
                        <ul>
                            <li>
                             <a onClick={handleLogout}>登出</a>
                            </li>
                        </ul>
                    </Route>
                    <Route path="/">
                        <ul>
                            <li>
                                <Link to="/admin">管理後台</Link>
                            </li>
                            <li>
                                <Link to="/lesson">課程列表</Link>
                            </li>
                        </ul>
                    </Route>
                </Switch>
            </div>
        </nav>
    )
}

const styledNavBar = styled(NavBar)`
    &.gradient01{
        background: linear-gradient(to right, #ff5d42 0%,#ff4b42 100%);
    }
    h1{
        text-indent: 101%;
        white-space: nowrap;
        overflow: hidden;
        background: url(${ImgLogo}) no-repeat center;
        background-size: contain;
        margin: 0 0 0 20px;
        height: 77px;
        width: 120px;
        float: left;
    }
     nav{
        position: fixed;
        top:0;
        width: 100%;
        z-index: 100;
        box-shadow: 0px 2px 1px rgba(0,0,0,.1);
    }

    .navbox{
        max-width: 1520px;
        margin: 0 auto;
        ${clearfix}
        ul{
            float: right;
            li{
                display: inline-block;
                a{
                    display: block;
                    padding: 25px 20px;
                    font-size: 15px;
                    color: #fff;
                }
            }
        }
    }
`

export default styledNavBar

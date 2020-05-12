import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import jsCookie from 'js-cookie'

import { login } from '@service'
import { actionLogin } from '@actions/user'


const Login = ({ className }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [ account, setAccount ] = useState('')
  const [ password, setPassword ] = useState('')
  const handleChangeAccount = (e) => {
    setAccount(e.target.value)
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleClickBtn = async (e) => {
    if(!password | !password) {
      console.error('尚未填寫')
      return
    }
    const data = await login(account, password)
    if(!data.success) {
      console.error('登入失敗')
      return
    }
    jsCookie.set('loginUId', data.uid, { expires: 1 })
    dispatch(actionLogin(data.uid))
    history.push('/admin')
  }
  return (
    <Container>
      <Row>
        <Col xs="12">
          <Form className={className}>
            <h2 className="mb-3">請先登入</h2>
            <Form.Group controlId="account">
              <Form.Label>信箱</Form.Label>
              <Form.Control onChange={handleChangeAccount} type="text" placeholder="請輸入信箱"></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>密碼</Form.Label>
              <Form.Control onChange={handleChangePassword} type="password" placeholder="請輸入密碼"></Form.Control>
            </Form.Group>
            <Button className="btn" onClick={handleClickBtn} variant="primary">登入</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

const StyledLogin = styled(Login)`
  max-width: 480px;
  margin: 100px auto 0 auto;
  height: 80vh;
  .btn{
    display: block;
    width: 100%;
    margin-top: 50px;
  }
`



export default StyledLogin

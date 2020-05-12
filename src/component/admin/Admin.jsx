import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import SideBar from '@component/admin/SideBar'

const admin = () => {
  const { path, url } = useRouteMatch()

  return (
    <Container fluid>
      <Row>
        <Col md="3" className="d-flex align-items-stretch">
          <SideBar />
        </Col>
        <Col md="9">
          <Switch>
            <Route path={`${path}/product`}>
              <h1>product</h1>
            </Route>
            <Route path={`${path}/coupon`}>
              <h1>coupon</h1>
            </Route>
            <Route path={`${path}/order`}>
              <h1>order</h1>
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  )
}

export default admin

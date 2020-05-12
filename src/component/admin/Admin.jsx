import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom'

import SideBar from '@component/admin/SideBar'
import ProductTable from '@component/admin/Product'

const admin = () => {
  const { path, url } = useRouteMatch()
  const history = useHistory()

  useEffect(() => {
    if(path === '/admin') {
      history.push('/admin/product')
    }
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col md="3" className="d-flex align-items-stretch">
          <SideBar />
        </Col>
        <Col md="9">
          <Switch>
            <Route path={`${path}/product`}>
              <ProductTable />
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

import React from 'react'
import {
  Row,
  Col,
  Card,
  Button,
  Badge
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { currency } from '@utils/format'

const CardLayout = ({product, addCart, isAddCartButton}) => (
  <Card>
    <Card.Img variant="top" src={product.imageUrl} />
    <Card.Body>
      <Card.Title>
        <div className="d-flex justify-content-between">
          {product.title}
          <Badge variant="light" className="text-secondary">
            {product.category}
          </Badge>
        </div>
      </Card.Title>
      <Card.Text as="div">
        {product.description}
        <div className="my-3 d-flex justify-content-between">
          <p className="text-secondary" style={{'textDecoration':'line-through'}}>{currency(product.origin_price)} 元</p>
          <h5>{currency(product.price)} 元</h5>
        </div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Row>
        {
          isAddCartButton
          ?
            <Col className="justify-content-md-between d-flex">
              <Link to={`/detail/${product.id}`}>
                <Button variant="outline-primary">詳細資料</Button>
              </Link>
              <Button variant="primary" onClick={() => {addCart(product.id, 1)}}>加入購物車</Button>
            </Col>
          :
            <Col>
              <Link to={`/detail/${product.id}`}>
                <Button style={{width: '100%'}} variant="outline-primary">查看課程</Button>
              </Link>
            </Col>
        }
      </Row>
    </Card.Footer>
  </Card>
)

export default CardLayout

import React from 'react'

import { Col, Form, Button, Card } from 'react-bootstrap'

class LessonInfo extends React.Component {

  selectRef = React.createRef()

  onChange = (e) => {
    this.props.handleCourseChange(e.target.value)
  }

  render() {
    const { product, addCart } = this.props
    let { totalPrice, totalUnit } = this.props
    const { price } = product

    totalPrice = price * totalUnit

    if(this.selectRef.current) {
      this.selectRef.current.value = totalUnit
    }

    return (
      <>
        <Col md="6">
          <Card.Img variant="top" src={product.imageUrl}></Card.Img>
        </Col>
        <Col md="6">
          <Card.Body>
            <Card.Title as="h2" className="my-3">{product.title}</Card.Title>
            <Card.Text className="my-4">
              <span className="d-block text-secondary mb-2">課程說明</span>
              {product.description}
            </Card.Text>
            <Card.Text className="text-secondary mb-2">購買堂數</Card.Text>
            <Form>
              <Form.Control
                as="select"
                ref={this.selectRef}
                onChange={this.onChange}>
                {
                  Array.from(new Array(10).keys()).map(number => (
                    <option key={number} value={number+1}>{number+1}</option>
                  ))
                }
              </Form.Control>
            </Form>
            <div className="d-flex justify-content-between align-items-center my-4">
              {!Number.isNaN(totalPrice) && <p>總計 ${totalPrice} 元</p> }
              <Button onClick={() => {addCart(product.id, totalUnit)}} variant="primary">加入購物車</Button>
            </div>
          </Card.Body>
        </Col>
      </>
    )
  }
}

export default LessonInfo

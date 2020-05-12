import React from 'react'

import Card from '@component/card'
import { Row, Col } from 'react-bootstrap'

class LessonList extends React.Component {
  render() {
    return (
      <Row>
        {
          this.props.filterProducts.map(product => (
            <Col
              className="my-4"
              key={product.title}
              xs="4">
              <Card
                product={product}
                addCart={this.props.addCart}
                isAddCartButton={true}/>
            </Col>
          ))
        }
      </Row>
    )
  }
}

export default LessonList

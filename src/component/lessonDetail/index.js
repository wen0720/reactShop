import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// service
import { getFrontProduct, getFrontAllProduct } from '@service'
import {
  storeGetCarts,
  deleteCart,
  addCart
} from '@service/handleCartService'

// component
import CustomCard from '@component/card'
import LessonInfo from '@component/lessonDetail/LessonInfo'

// container
import CartContainer from '@containers/cart'

// util
import { scrollTop } from '@utils/common'

class LessonDetail extends React.Component {

  state = {
    product: {},
    products: [],
    othrProducts: [],
    totalPrice: 0,
    totalUnit: 1,
  }

  setProductsShowOnPage = async (params) => {
    const res = await Promise.all([getFrontProduct(params.id), getFrontAllProduct()])
    res.forEach(result => {
      if(!result.success) {
        console.error(result.message)
        return
      }

      if(result.products) {
        this.setState({products: result.products}, () => {
            this.setState(
              {
                othrProducts: result.products.filter(pdt =>
                      pdt.category === this.state.product.category
                      && pdt.id !== this.props.match.params.id
                  )
              }
            )
          }
        )
        return
      }

      this.setState({product: result.product})
    })
  }

  handleCourseChange = (value) => {
    this.setState({totalUnit: value})
  }

  componentDidMount() {
    const { match: { params } } = this.props
    this.setProductsShowOnPage(params)
    storeGetCarts()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params !== prevProps.match.params) {
      this.setProductsShowOnPage(this.props.match.params);
      // reset data
      this.setState({totalUnit: 1})
      scrollTop()
    }
  }

  render() {
    const { product, othrProducts } = this.state
    let { totalPrice, totalUnit } = this.state
    const { price } = product

    totalPrice = price * totalUnit

    return (
      <Container className="py-5">
        <Row>
          <LessonInfo
            product={product}
            totalPrice={totalPrice}
            totalUnit={totalUnit}
            addCart={addCart}
            handleCourseChange={this.handleCourseChange}/>
        </Row>
        <hr/>
        <Row>
          <Col>
            <h4 className="mt-2 mb-4">其他課程</h4>
            <Row>
                {
                  othrProducts.map(product => (
                    <Col key={product.title} xs="12" md="4">
                      <CustomCard
                        product={product}
                        isAddCartButton={false}
                      ></CustomCard>
                    </Col>
                  ))
                }
            </Row>
          </Col>
          <CartContainer
            deleteCart={deleteCart}
            />
        </Row>
      </Container>
    )
  }
}

export default LessonDetail

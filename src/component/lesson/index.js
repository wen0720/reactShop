import React from 'react'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'

// service
import {
  getFrontProducts,
  getFrontAllProduct,
} from '@service'

import {
  storeGetCarts,
  deleteCart,
  addCart
} from '@service/handleCartService'

// component
import LessonList from '@component/lesson/LessonList'
import LessonFilter from '@component/lesson/LessonFilter'
import TopBar from '@component/common/topbar'
import Pagination from '@component/common/pagination'

// container
import CartContainer from '@containers/cart'

class Lesson extends React.Component {
  state = {
    // allProducts: [],
    // pageProducts: [],
    pagination: {},
    messages: [],
    filterProducts: [],
    activeItem: '全部商品',
    cartData: {
      carts:[]
    }
  }

  handleFilterProduct(activeItem) {
    console.log(this.props)
    if(activeItem === '全部商品') {
      // this.setState({filterProducts: this.state.pageProducts})
      this.setState({filterProducts: this.props.pageProducts})
      return
    }
    const newFilterProducts = this.props.allProducts.filter(item => activeItem === item.category)
    this.setState({filterProducts: newFilterProducts})
  }

  handleChangeFilter = (newFilter) => {
    this.setState({ activeItem: newFilter }, () => {
      this.handleFilterProduct(this.state.activeItem)
    })
  }

  clickPagination = async (page) => {
    const res = await getFrontProducts(page)
    if(!res.success) {
      // show alert
      console.error(res.message)
      return
    }

    this.props.getPageProduct(res.products)
    this.setState({
      // pageProducts: res.products,
      pagination: res.pagination,
      messages: res.messages
    }, () => {
      this.handleFilterProduct('全部商品')
    })
  }

  async componentDidMount() {
    const res = await Promise.all([getFrontProducts(), getFrontAllProduct()])

    res.forEach((result) => {
      if(!result.success) {
        //  show alert
        console.error(result.message)
        return
      }

      if(result['pagination']) {
        this.props.getPageProduct(result.products)
        this.setState({
          // pageProducts: result.products,
          pagination: result.pagination,
          messages: result.messages
        }, () => {
          this.handleFilterProduct(this.state.activeItem)
        })
        return
      }

      this.props.getAllProduct(result.products)

      storeGetCarts()
    })
  }

  render() {
    const { filterProducts, pagination, activeItem } = this.state
    const showPagination = activeItem === '全部商品'
    return (
      <Container fluid>
        <Row>
          <TopBar>
            課程列表
          </TopBar>
        </Row>
        <Row className="my-5">
          <Col xs="12" md="3">
            <LessonFilter
              handleChangeFilter={this.handleChangeFilter}
              activeItem={activeItem}
            />
          </Col>
          <Col xs="12" md="9">
            <LessonList
              filterProducts={filterProducts}
              addCart={addCart}
            />
            {
              showPagination &&
              <Pagination
                pagination={pagination}
                clickPagination={this.clickPagination}
              />
            }
          </Col>
          <CartContainer
            deleteCart={deleteCart}
           />
        </Row>
      </Container>
    )
  }
}

export default Lesson

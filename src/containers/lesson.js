import { connect } from 'react-redux'
import Lessson from '@component/lesson'
import { actionGetFrontAllProduct, actionGetFrontPageProduct } from '@actions/product'

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  return {
    allProducts: state.allProductsReducer.allProducts,
    pageProducts: state.pageProductsReducer.pageProducts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProduct(allProducts) {
      dispatch(actionGetFrontAllProduct(allProducts))
    },
    getPageProduct(pageProducts) {
      dispatch(actionGetFrontPageProduct(pageProducts))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lessson)

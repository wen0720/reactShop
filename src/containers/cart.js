import { connect } from 'react-redux'
import Cart from '@component/cart'


const mapStateToProps = (state) => {
  return {
    cartData: state.cartReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

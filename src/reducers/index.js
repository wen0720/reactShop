import { combineReducers } from 'redux'
import cart from '@reducers/cart'
import { allProducts, product, pageProducts } from '@reducers/product'
import user from '@reducers/user'

const app = combineReducers({
  cartReducer: cart,
  allProductsReducer: allProducts,
  productRedecer: product,
  pageProductsReducer: pageProducts,
  userReducer: user
})

export default app

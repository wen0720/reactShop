const initAllProductsState = []
const initProductState = {}
const initPageProducts = []

const allProducts = (state = initAllProductsState, action ) => {
  switch(action.type) {
    case 'GET_FRONT_ALL_PRODUCTS':
      console.log('GET_FRONT_ALL_PRODUCTS', action)
      return {
        allProducts: action.allProducts
      }
    default:
      console.log('default')
      return state
  }
}

const product = (state = initProductState, action) => {
  switch(action.type) {
    case 'GET_FRONT_PRODUCT':
      return {
        product: action.product
      }
    default:
      return state
  }
}

const pageProducts = ( state = initPageProducts, action ) => {
  switch(action.type) {
    case 'GET_FRONT_PAGE_PRODUCT':
      return {
        pageProducts: action.pageProducts
      }
    default:
      return state
  }
}

export { allProducts, product, pageProducts }

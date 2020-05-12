const initCartState = {
  carts: [],
  final_total: 0,
  total: 0
}

const cart = (state = initCartState, action) => {
  switch(action.type) {
    case 'GET_CARTS': {
      return {
        carts: action.cartData.carts,
        final_total: action.cartData.final_total,
        total: action.cartData.total
      }
    }

    default:
      return state
  }
}

export default cart

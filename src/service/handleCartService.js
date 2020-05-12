import {
  getCarts,
  deleteCartProduct,
  addToCart
} from '@service/modal'

import store from '@store'
import { actionGetCarts } from '@actions/cart'

async function storeGetCarts() {
  const res = await getCarts()
  if(!res.success) {
    console.error(res.message)
    return
  }

  store.dispatch(actionGetCarts({
    carts: res.data.carts,
    final_total: res.data.final_total,
    total: res.data.total
  }))
}

async function deleteCart(id) {
  const res = await deleteCartProduct(id)
  if(!res.success) {
    console.error(res.message)
    return
  }
  storeGetCarts()
}

async function addCart(id, qty=1) {
  const res = await addToCart(id, qty)
  if(!res.success) {
    console.error(res.message)
    return
  }
  storeGetCarts()
}

export {
  storeGetCarts,
  deleteCart,
  addCart
}

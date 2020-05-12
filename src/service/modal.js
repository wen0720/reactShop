import axios from '@service/axios'

/**
 * 取得前台商品
 * @param {number} page
 */
function getFrontProducts(page = 1) {
  return axios.get(`/products?page=${page}`)
    .then(response => {
      return response.data
    })
    .catch(err => ({
      message: err.message,
      success: false
    }))
}

/**
 * 取得前台所有產品
 */
function getFrontAllProduct() {
  return axios.get(`/products/all`)
    .then(res => {
      return res.data
    })
    .catch(err => ({
      message: err.message,
      success: false
    }))
}

/**
 * 取得單一產品
 * @param {numebr} id
 */
function getFrontProduct(id) {
  return axios.get(`/product/${id}`)
    .then(res => {
      return res.data
    })
    .catch(err => ({
      message: err.message,
      success: false
    }))
}

/**
 * 取得購物車
 */
function getCarts() {
  return axios.get(`/cart`)
    .then(res => {
      return res.data
    })
    .catch(err => ({
      message: err.message,
      success: false
    }))
}

/**
 * 移除購物車產品
 * @param {number} id
 */
function deleteCartProduct (id) {
  return axios.delete(`/cart/${id}`)
    .then(res => {
      return res.data
    })
    .catch(err => ({
      message: err.message,
      success: false
    }))
}

/**
 * 新增購物車
 * @param {number} id
 * @param {number} qty
 */
function addToCart (id, qty = 1) {
  const data = { 'product_id': id, 'qty': qty }
  return axios.post(`/cart`, { 'data': data })
    .then(res => {
      return res.data
    })
    .catch(err => ({
      message: err.message,
      success: false
    }))
}

export {
  getFrontProducts,
  getFrontAllProduct,
  getFrontProduct,
  getCarts,
  deleteCartProduct,
  addToCart
}

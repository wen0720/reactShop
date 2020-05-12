export function actionGetFrontAllProduct(allProducts) {
  return {
    type: 'GET_FRONT_ALL_PRODUCTS',
    allProducts
  }
}

export function actionGetFrontProduct(product) {
  return {
    type: 'GET_FRONT_PRODUCT',
    product
  }
}

export function actionGetFrontPageProduct(pageProducts) {
  return {
    type: 'GET_FRONT_PAGE_PRODUCT',
    pageProducts
  }
}

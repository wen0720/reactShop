import React, { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'

import { getAdminProduct } from '@service'

const ProductTable = () => {
  const [ adminProduct, setAdminProduct ] = useState([])
  useEffect(() => {
    async function ajaxGetAdminProduct() {
      const data = await getAdminProduct()
      if(!data.success) {
        console.error(data)
        return false
      }
      console.log(data)
      setAdminProduct(data)
    }
    ajaxGetAdminProduct()
  }, [])

  return (
    <Table>
      <thead>
        <tr>
          <th>分類</th>
          <th>產品名稱</th>
          <th>原價</th>
          <th>售價</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>
            <Button variant="outline-primary">編輯</Button>
            <Button variant="outline-dark">刪除</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}


export default ProductTable

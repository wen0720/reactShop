import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AdminSideBar = ({ className }) => {
  return (
    <div className={`${className} bg-light`}>
      <div className="title">管理員</div>
      <ul>
        <li>
          <Link to="/admin/product">產品列表</Link>
        </li>
        <li>
          <Link to="/admin/coupon">折價卷列表</Link>
        </li>
        <li>
          <Link to="/admin/order">訂單列表</Link>
        </li>
      </ul>
    </div>
  )
}

const StyledAdminSideBar = styled(AdminSideBar)`
  width: 100%;
`

export default StyledAdminSideBar

import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import { translateCenter } from '@utils/styleMixins'
import media from '@utils/cssMedia'
import { Table, Button } from 'react-bootstrap'
import { currency } from '@utils/format'

const TableLayout = ({carts, final_total, total, deleteCart}) => (
  <Table>
    <tbody>
      {
        carts.map(item => (
          <tr key={item.id}>
            <td className="align-middle">
              <Button
                variant="outline-danger"
                onClick={() => {deleteCart(item.id)}}>
                <FontAwesomeIcon icon="trash-alt" />
              </Button>
            </td>
            <td className="align-middle">{item.product.title}</td>
            <td className="align-middle">{`${item.qty}/${item.product.unit}`}</td>
            <td className="align-middle">{currency(item.final_total)}</td>
          </tr>
        ))
      }
    </tbody>
    <tfoot>
        <tr>
          <td colSpan="3" className="text-right">總計</td>
          <td className="text-right">{currency(total)}</td>
        </tr>
        <tr>
          <td colSpan="3" className="text-right text-success">折扣價</td>
          <td className="text-right text-success">{currency(final_total)}</td>
        </tr>
    </tfoot>
  </Table>
)

const CartLayout = ({className, cartData, showCart, openCart, id, deleteCart}) => (
  <div id={id} className={className} onClick={openCart}>
    <div className="cart__btn">
      <div className="cart__num">{cartData.carts.length}</div>
      <FontAwesomeIcon icon="cart-plus" />
    </div>
    {
      showCart &&
      <div className="cart__list rounded-sm">
      <p className="h6 pt-2 pb-3">已選購商品</p>
      <TableLayout {...cartData} deleteCart={deleteCart}></TableLayout>
      <Link to="/" className="d-block">
        <Button className="cart__checkout" variant="outline-primary">立即結帳</Button>
      </Link>
      <div className="cart__listMask"></div>
    </div>
    }
  </div>
)

const StyledCartLayout = styled(CartLayout)`
    position: fixed;
    right: 20px;
    bottom: 20px;
    background: #fff;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow: 1px 1px 3px rgba(0,0,0,.2);
    z-index: 2;
    .cart{
      &__btn{
        ${translateCenter}
        svg{
            font-size:28px;
            color:#ff5d42;
        }
      }
      &__list{
          position: absolute;
          bottom: 80px;
          right: 0;
          background: #fff;
          padding: 10px;
          width: 400px;
          box-shadow: 0px 0px 10px rgba(0,0,0,.2);
          ${media.px480`
            position: fixed;
            left: 0;
            right: 0;
            width: 100%;
            bottom: 0;
          `}
      }
      &__num{
          position: absolute;
          background-color: #ff5d42;
          border-radius: 25px;
          width: 25px;
          height: 25px;
          line-height: 25px;
          text-align: center;
          color: #fff;
          top: -70%;
          right: -62%;
      }
      &__checkout{
        display: block;
        width: 100%;
      }
    }
`

class Cart extends React.Component {
  state = {
    showCart: false
  }

  closeCart = (e) => {
    const isClickOnCart = document.getElementById('js-cart').contains(e.target)
    if(!isClickOnCart) {
      this.setState({
        showCart: false
      })
      window.removeEventListener('click', this.closeCart)
    }
  }

  openCart = () => {
    this.setState({
      showCart: true
    }, () => {
      window.addEventListener('click', this.closeCart)
    })
  }

  render() {
    return (
        <StyledCartLayout
          id="js-cart"
          deleteCart={this.props.deleteCart}
          openCart={this.openCart}
          showCart={this.state.showCart}
          cartData={this.props.cartData}/>
    )
  }
}

export default Cart

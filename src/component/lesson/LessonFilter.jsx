import React from 'react'
import styled from 'styled-components'
import { ListGroup } from 'react-bootstrap'

import { transition } from '@utils/styleMixins'

const StyledListItem = styled(ListGroup.Item)`
  cursor: pointer;
  ${transition}
  &:hover{
    background: ${ (props) => props.active ? '#ff5042' : '#eee'};
  }
`



class LessonFilter extends React.Component {
  state = {
    list: [
      '全部商品', '有氧', '飛輪', '肌力訓練', '基礎瑜珈', '飲食課程', '體驗', '1對1課程'
    ]
  }
  handleClick = (e) => {
    this.props.handleChangeFilter(e.target.textContent)
  }

  render() {
    const { list } = this.state
    return (
      <ListGroup>
        {
          list.map(item => (
            <StyledListItem
              key={item}
              onClick={this.handleClick}
              active={this.props.activeItem === item}
            >
            {item}
            </StyledListItem>
          ))
        }
      </ListGroup>
    )
  }
}

export default LessonFilter

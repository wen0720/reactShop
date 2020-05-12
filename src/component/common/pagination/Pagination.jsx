import React from 'react'
import {
  Pagination
} from 'react-bootstrap'

class PaginationItem extends React.Component {
  render() {
    const { pagination } = this.props

    return (
      <Pagination>
        { pagination.has_pre &&
          <Pagination.Prev onClick={() => { this.props.clickPagination(pagination.current_page - 1) }}/>
        }
        {
          Array.from({length: pagination.total_pages})
            .map((number, idx) => (
              <Pagination.Item
                key={idx+1}
                active={idx+1 === pagination.current_page}
                onClick={() => { this.props.clickPagination(idx+1) }}>
                {idx+1}
              </Pagination.Item>
            ))
        }
        {
          pagination.has_next &&
          <Pagination.Next onClick={() => {this.props.clickPagination(pagination.current_page + 1) }}/>
        }
      </Pagination>
    )
  }
}

export default PaginationItem




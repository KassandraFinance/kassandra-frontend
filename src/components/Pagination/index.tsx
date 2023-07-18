import ReactPaginate from 'react-paginate'

import * as S from './styles'

interface IPaginationProp {
  take: number
  skip: number
  totalItems: number
  page?: number
  handlePageClick: (
    data: {
      selected: number
    },
    take: number
  ) => void
}

const Pagination = ({
  take,
  totalItems,
  handlePageClick,
  page = -1
}: IPaginationProp) => {
  const pageCount = Math.ceil(totalItems / take)

  function handleClick(data: { selected: number }) {
    handlePageClick(data, take)
  }

  return (
    <S.PaginateContainer totalItems={totalItems < 30}>
      {page >= 0 ? (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handleClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          forcePage={page}
          previousLabel="<"
          containerClassName={'paginate__container'}
          pageClassName={'paginate__Page'}
          pageLinkClassName={'paginate__link'}
          previousClassName={'paginate__previous'}
          nextClassName={'paginate__next'}
          previousLinkClassName={'paginate__link__previous'}
          nextLinkClassName={'paginate__link__next'}
          activeLinkClassName={'paginate__active'}
          breakLinkClassName={'paginate__break__link'}
        />
      ) : (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handleClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          containerClassName={'paginate__container'}
          pageClassName={'paginate__Page'}
          pageLinkClassName={'paginate__link'}
          previousClassName={'paginate__previous'}
          nextClassName={'paginate__next'}
          previousLinkClassName={'paginate__link__previous'}
          nextLinkClassName={'paginate__link__next'}
          activeLinkClassName={'paginate__active'}
          breakLinkClassName={'paginate__break__link'}
        />
      )}
    </S.PaginateContainer>
  )
}

export default Pagination

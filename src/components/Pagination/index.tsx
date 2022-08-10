import ReactPaginate from 'react-paginate'

import * as S from './styles'

interface IPaginationProp {
  take: number;
  skip: number;
  totalItems: number;
  handlePageClick: (
    data: {
      selected: number
    },
    take: number
  ) => void;
}

const Pagination = ({ take, totalItems, handlePageClick }: IPaginationProp) => {
  const pageCount = Math.ceil(totalItems / take)

  function handleClick(data: { selected: number }) {
    handlePageClick(data, take)
  }

  return (
    <S.PaginateContainer>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handleClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
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
      />
    </S.PaginateContainer>
  )
}

export default Pagination

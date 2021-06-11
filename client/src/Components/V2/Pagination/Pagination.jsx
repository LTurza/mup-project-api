import React from 'react'
import './pagination.scss'
import { useSelector ,useDispatch } from 'react-redux'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'

const paginationSelector = state => state.pagination

const Pagination = () => {
  const pagination = useSelector(paginationSelector)
  const dispatch = useDispatch()

const changePage = (increase) => {
  if(increase && pagination.activeIndex < pagination.pages){
    dispatch({type: 'pagination/nextIndex'})
  } else if(!increase && pagination.activeIndex !==1) {
    dispatch({type: 'pagination/prevIndex'})
  }
}

  return (
    <div className="pagination">
      <div className="pagination__icon">
        <NavigateBeforeIcon fontSize="large" onClick={ () => changePage(false)}/>
      </div>
      <div className="pagination__index">
      {pagination.activeIndex}
      </div>
      <div className="pagination__icon">
        <NavigateNextIcon fontSize="large" onClick={ () => changePage(true)}/>
      </div>
    </div>
  )
}

export default Pagination

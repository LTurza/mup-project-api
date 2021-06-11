const initialState = {
  pages: 0,
  activeIndex: 1,
}

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'pagination/setPages': {
      return {
        ...state,
        pages: action.payload.pages,
      }
    }
    case 'pagination/nextIndex': {
      return {
        ...state,
        activeIndex: state.activeIndex+1
      }
    }
    case 'pagination/prevIndex': {
      return {
        ...state,
        activeIndex: state.activeIndex-1
      }
    }
    default:
      return state
  } 
}

export default paginationReducer
const initialState = {
  token: '',
  firstName: '',
  lastName: '',
  id: '',
  email: '',
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'user/login': {
      return {
        ...state,
        ...action.payload,
      }
    }
    case 'user/logout': {
      return {
        ...state,
        token: '',
        firstName: '',
        id: '',
        email:'',
      }
    }
  default:
    return state
  }
}

export default userReducer
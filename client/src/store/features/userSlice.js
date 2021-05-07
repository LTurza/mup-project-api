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
  default:
    return state
  }
}

export default userReducer
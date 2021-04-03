const initialState = {
    signUp: false,
    signIn: false,
    alert: false,
    loading: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'app/showUserSignUpModal': {
      return {
        ...state,
          signUp: true,
      }
    }
    case 'app/hideUserSignUpModal': {
      return {
        ...state,
        signUp: false,
      }
    }
    case 'app/showUserSignInModal': {
      return {
        ...state,
          signIn: true,
      }
    }
    case 'app/hideUserSignInModal': {
      return {
        ...state,
        signIn: false,
      }
    }
    case 'app/showAlert': {
      return {
        ...state,
          alert: true,
      }
    }
    case 'app/hideAlert': {
      return {
        ...state,
        alert: false,
      }
    }
    case 'app/showLoading': {
      return {
        ...state,
          loading: true,
      }
    }
    case 'app/hideLoading': {
      return {
        ...state,
        loading: false,
      }
    }
    default:
      return state
  }
}

export default appReducer
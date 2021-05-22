const initialState = {
    signUp: false,
    signIn: false,
    alert: false,
    loading: false,
    addOrganization: false,
    mobileMenu: false,
    logOutUserPanel: false,

}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'modal/openMobileMenu': {
      return {
        ...state,
        mobileMenu: true,
      }
    }
    case 'modal/closeMobileMenu': {
      return {
        ...state, 
        mobileMenu: false,
      }
    }
    case 'modal/toggleMobileMenu': {
      return {
        ...state,
        mobileMenu: !state.mobileMenu,
        logOutUserPanel: false,
        signIn: false,
        signUp: false,
      }
    }
    case 'modal/mobileLogOutUserPanel': {
      return {
        ...state,
        logOutUserPanel: !state.logOutUserPanel,
        mobileMenu: false,
        signUp: false,
        signIn: false,
      }
    }
    case 'modal/closeAllModals': {
      return {
        ...state,
        mobileMenu: false,
        logOutUserPanel: false,
        signIn: false,
        signUp: false,
      }
    }
    case 'modal/openUserSignInModal': {
      return {
        ...state,
        signIn: true,
        signUp: false,
        mobileMenu: false,
        logOutUserPanel: false,
      }
    }
    case 'modal/closeUserSignInModal': {
      return {
        ...state,
        signIn: false,
      }
    }
    case 'modal/openUserSignUpModal': {
      return {
        ...state,
        signIn: false,
        signUp: true,
        mobileMenu: false,
        logOutUserPanel: false,
      }
    }
    case 'modal/closeUserSignUpModal': {
      return {
        ...state,
        signUp: false,
      }
    }
//---------------------------------
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
    case 'app/showOrganizationAddModal': {
      return {
        ...state,
        signUp: true,
      }
    }
    case 'app/hideOrganizationAddModal': {
      return {
        ...state,
        signUp: false,
      }
    }
    default:
      return state
  }
}

export default appReducer
const initialState = {
    signUp: false,
    signIn: false,
    alert: false,
    loading: false,
    addOrganization: false,
    mobileMenu: false,
    logOutUserPanel: false,
    invalidUserData: false,
    newOrganization: false,
    organizationDeleteConfirmation: false,
    newTask: false, 
    taskDescription: false,
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
        signUp: false,
        signIn: false,
        alert: false,
        loading: false,
        addOrganization: false,
        mobileMenu: false,
        logOutUserPanel: false,
        invalidUserData: false,
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
        invalidUserData: false,
      }
    }

    case 'modal/closeUserSignUpModal': {
      return {
        ...state,
        signUp: false,
      }
    }

    case 'modal/openInvalidUserData': {
      return {
        ...state,
        invalidUserData: true,
      }
    }

    case 'modal/closeInvalidUserData': {
      return {
        ...state,
        invalidUserData: false,
      }
    }

    case 'modal/openNewOrganization': {
      return {
        ...state,
        newOrganization: true,
      }
    }

    case 'modal/closeNewOrganization': {
      return {
        ...state,
        newOrganization: false,
      }
    }

    case 'modal/openOrganizationDeleteConfirmation': {
      return {
        ...state,
        organizationDeleteConfirmation: true
      }
    }

    case 'modal/closeOrganizationDeleteConfirmation': {
      return {
        ...state,
        organizationDeleteConfirmation: false
      }
    }
    case 'modal/openNewTask': {
      return {
        ...state,
        newTask: true,
      }
    }


    case 'modal/closeNewTask': {
      return {
        ...state,
        newTask: false,
      }
    }

    case 'modal/openTaskDescription': {
      return {
        ...state,
        taskDescription: true,
      }
    }
    case 'modal/closeTaskDescription': {
      return {
        ...state,
        taskDescription: false,
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
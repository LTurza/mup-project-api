const initialState = {
  counter: 0,
  organizationsArray: [],
  organizationsToDelete: [],
  selectedOrganization: {},
}

const organizationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'organizations/fetchOrganization': {
      return {
        ...state,
        counter: action.payload.counter,
        organizationsArray: [...state.organizationsArray, ...action.payload.organizationsArray]
      }
    }
    case 'organizations/clearOrganizations': {
      return {
        ...state,
        counter: 0,
        organizationsArray: []
      }
    }
    case 'organizations/addToDelete': {
      return {
        ...state,
        organizationsToDelete: [...state.organizationsToDelete, action.payload]
      }
    }
    case 'organizations/removeFromDelete': {
      return {
        ...state,
        organizationsToDelete: state.organizationsToDelete.filter(element => element !== action.payload)
      }
    }
    case 'organizations/addSelectedorganization': {
      return {
        ...state,
        selectedOrganization: action.payload
      }
    }
    default:
      return state
  } 
}

export default organizationsReducer
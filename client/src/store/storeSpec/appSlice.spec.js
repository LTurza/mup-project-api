import appReducer from './../features/appSlice'

// const initialState = {
//   signUp: false,
//   signIn: false,
//   alert: false,
//   loading: false,
// }

test('Shows user SignIn modal', () => {
  const initialState = {
    signIn: false
  }
  const action = {type: 'app/showUserSignInModal'}
  const result = appReducer(initialState, action)
  expect(result.signIn).toBe(true)
})

test('Hides user SignIn modal', () => {
  const initialState = {
    signIn: true
  }
  const action = {type: 'app/hideUserSignInModal'}
  const result = appReducer(initialState, action)
  expect(result.signIn).toBe(false)
})

test('Shows user SignUp modal', () => {
  const initialState = {
    signUp: false
  }
  const action = {type: 'app/showUserSignUpModal'}
  const result = appReducer(initialState, action)
  expect(result.signUp).toBe(true)
})

test('Hides user SignUp modal', () => {
  const initialState = {
    signUp: true
  }
  const action = {type: 'app/hideUserSignUpModal'}
  const result = appReducer(initialState, action)
  expect(result.signUp).toBe(false)
})

test('Shows alert', () => {
  const initialState = {
    alert: false
  }
  const action = {type: 'app/showAlert'}
  const result = appReducer(initialState, action)
  expect(result.alert).toBe(true)
})

test('Hides alert ', () => {
  const initialState = {
    alert: true
  }
  const action = {type: 'app/hideAlert'}
  const result = appReducer(initialState, action)
  expect(result.alert).toBe(false)
})

test('Shows loading', () => {
  const initialState = {
    loading: false
  }
  const action = {type: 'app/showLoading'}
  const result = appReducer(initialState, action)
  expect(result.loading).toBe(true)
})

test('Hides loading ', () => {
  const initialState = {
    loading: true
  }
  const action = {type: 'app/hideLoading'}
  const result = appReducer(initialState, action)
  expect(result.loading).toBe(false)
})
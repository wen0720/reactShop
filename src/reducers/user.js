const initUser = {
  uid: ''
}

const user = (state = initUser, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      }
    case 'LOGOUT':
      return {
        uid: action.uid
      }
    default:
      return state
  }
}

export default user

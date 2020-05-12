export function actionLogin(uid) {
  return {
    type: 'LOGIN',
    uid
  }
}

export function actionLogout() {
  return {
    type: 'LOGOUT',
    uid: ''
  }
}

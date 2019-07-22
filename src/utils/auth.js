import Cookies from 'js-cookie'

const TokenKey = 'cso_admin_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, 'JWT ' + token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

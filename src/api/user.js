import request from '../utils/request'

export function login(data) {
  return request({
    url: 'cso/mg/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: 'cso/mg/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'cso/mg/user/logout',
    method: 'post'
  })
}

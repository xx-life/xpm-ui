import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/cso/v1/e2/info_secs/',
    method: 'get',
    params
  })
}

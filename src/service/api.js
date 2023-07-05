import { request } from './request'

export function getServerInfo () {
  return request({
    method: 'get',
    url: '/server-monitor/getServerInfo'
  })
}

export function exampleList () {
  return request({
    method: 'get',
    url: '/exampleManager/list'
  })
}

export function start (port) {
  return request({
    method: 'post',
    url: '/exampleManager/start/' + port
  })
}

export function stop (port) {
  return request({
    method: 'post',
    url: '/exampleManager/stop/' + port
  })
}

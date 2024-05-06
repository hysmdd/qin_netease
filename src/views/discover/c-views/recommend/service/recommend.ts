import qhRequest from '@/service'

export function getBanners() {
  return qhRequest.get({
    url: '/banner'
  })
}

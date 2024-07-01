import qhRequest from '@/service'

export function getBanners() {
  return qhRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 30) {
  return qhRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return qhRequest.get({
    url: '/album/newest'
  })
}

import qhRequest from '@/service'
import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

export interface IBannerData {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: any
  exclusive: boolean
  encodeId: string
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBannerData[]>([])
  useEffect(() => {
    qhRequest
      .get({
        url: '/banner'
      })
      .then((res: any) => {
        setBanners(res.banners)
      })
  }, [])

  return (
    <div>
      {banners.map((item, index) => {
        return <img src={item.imageUrl} key={index} />
      })}
    </div>
  )
}

export default memo(Recommend)

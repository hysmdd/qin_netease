import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'

import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  /** 从store中获取数据 */
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )

  /** 计算轮播图对应链接 */
  const getClickBannerUrl = (banner: any) => {
    if (banner.targetType === 1) {
      return `https://music.163.com/#/song?id=${banner.targetId}`
    } else if (banner.targetType === 10) {
      return `https://music.163.com/#/album?id=${banner.targetId}`
    } else {
      return ''
    }
  }

  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay>
            {banners.map((item: any) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <a href={getClickBannerUrl(item)}>
                    <img
                      className="image"
                      src={item.imageUrl}
                      alt={item.typeTitle}
                    />
                  </a>
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight>111</BannerRight>
        <BannerControl>
          <button className="btn left"></button>
          <button className="btn right"></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)

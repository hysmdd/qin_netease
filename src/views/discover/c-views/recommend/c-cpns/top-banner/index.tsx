import React, { memo, useRef } from 'react'
import { ElementRef, FC, ReactNode, useState } from 'react'
import { Carousel } from 'antd'

import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  /** 定义内部的数据 */
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

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

  /** 事件处理函数 */
  const handleAfterChange = (current: number) => {
    setCurrentIndex(current)
  }

  const handlePrevClick = () => {
    bannerRef.current?.prev()
  }

  const handleNextClick = () => {
    bannerRef.current?.next()
  }

  /** 获取背景图片 */
  let bgImageUrl = banners[currentIndex]?.imageUrl
  if (bgImageUrl) {
    bgImageUrl = bgImageUrl + '?imageView&blur=40x20'
  }

  return (
    <BannerWrapper
      style={{ background: `url(${bgImageUrl}) center center / 6000px` }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            ref={bannerRef}
            autoplay
            effect="fade"
            afterChange={handleAfterChange}
          >
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
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)

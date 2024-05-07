import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { BannerWrapper } from './style'
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

  return (
    <BannerWrapper>
      {banners.map((item: any) => {
        return <div key={item.targetId}>{item.imageUrl}</div>
      })}
    </BannerWrapper>
  )
}

export default memo(TopBanner)

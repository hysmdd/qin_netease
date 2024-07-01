import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    shallowEqualApp
  )

  return (
    <HotWrapper>
      <SectionHeaderV1 />
      <div className="hot-recommend">
        {hotRecommends.map((item) => {
          return (
            <div className="item" key={item.id}>
              {item.name}
            </div>
          )
        })}
      </div>
    </HotWrapper>
  )
}

export default memo(HotRecommend)

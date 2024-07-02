import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import { shallowEqualApp, useAppSelector } from '@/store'
import PlaylistItem from '@/components/playlist-item'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend?.hotRecommends
    }),
    shallowEqualApp
  )

  const sub = ['华语', '流行', '摇滚', '民谣', '电子']

  return (
    <HotWrapper>
      <SectionHeaderV1 title="热门推荐" sub={sub} />
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return (
            <PlaylistItem itemData={item} key={item.id}>
              {item.name}
            </PlaylistItem>
          )
        })}
      </div>
    </HotWrapper>
  )
}

export default memo(HotRecommend)

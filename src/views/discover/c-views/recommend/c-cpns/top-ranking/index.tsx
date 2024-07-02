import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  return (
    <RankingWrapper>
      <SectionHeaderV1 title="榜单" moreLink="/discover/toplist" />
      <div className="content">aaa</div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)

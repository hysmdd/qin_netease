import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  return (
    <RecommendWrapper>
      <SectionHeaderV1 />
      HotRecommend
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)

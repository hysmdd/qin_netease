import { useAppDispatch } from '@/store'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchBannerDataAction } from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import {
  RecommendWrapper,
  RecommendSection,
  RecommendLeft,
  RecommendRight
} from './style'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <RecommendSection className="content wrap-v2">
        <RecommendLeft className="left">left</RecommendLeft>
        <RecommendRight className="right">right</RecommendRight>
      </RecommendSection>
      Recommend
    </RecommendWrapper>
  )
}

export default memo(Recommend)

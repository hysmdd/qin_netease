import { useAppDispatch } from '@/store'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction
} from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import {
  RecommendWrapper,
  RecommendSection,
  RecommendLeft,
  RecommendRight
} from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <RecommendSection className="content wrap-v2">
        <RecommendLeft className="left">
          <HotRecommend />
          <NewAlbum />
        </RecommendLeft>
        <RecommendRight className="right">right</RecommendRight>
      </RecommendSection>
      Recommend
    </RecommendWrapper>
  )
}

export default memo(Recommend)

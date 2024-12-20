import { useAppDispatch } from '@/store'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
// import {
//   fetchBannerDataAction,
//   fetchHotRecommendAction,
//   fetchNewAlbumAction
// } from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import {
  RecommendWrapper,
  RecommendSection,
  RecommendLeft,
  RecommendRight
} from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import {
  fetchRankingDataAction,
  fetchRecommendDataAction
} from './store/recommend'
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // dispatch(fetchBannerDataAction())
    // dispatch(fetchHotRecommendAction())
    // dispatch(fetchNewAlbumAction())
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRankingDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <RecommendSection className="content wrap-v2">
        <RecommendLeft className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </RecommendLeft>
        <RecommendRight className="right">
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </RecommendRight>
      </RecommendSection>
    </RecommendWrapper>
  )
}

export default memo(Recommend)

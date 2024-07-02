import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingItemWrapper } from './style'

interface IProps {
  children?: ReactNode
  itemData: any
}

const TopRankingItem: FC<IProps> = (props) => {
  const { itemData } = props
  return <RankingItemWrapper>{itemData.name}TopRankingItem</RankingItemWrapper>
}

export default memo(TopRankingItem)

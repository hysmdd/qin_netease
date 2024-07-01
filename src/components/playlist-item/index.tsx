import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlaylistItemWrapper } from './style'
import { formatCount, getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData?: any
}

const PlaylistItem: FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <PlaylistItemWrapper>
      <div className="cover-top">
        <img src={getImageSize(itemData.picUrl, 140)} alt={itemData.name} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              {formatCount(itemData.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{itemData.name}</div>
    </PlaylistItemWrapper>
  )
}

export default memo(PlaylistItem)

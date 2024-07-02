import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const NewAlbumItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <AlbumWrapper>
      <div className="album-image">
        <img src={getImageSize(itemData?.picUrl, 100)} alt={itemData?.name} />
        <a
          href={'https://music.163.com/#/album?id=' + itemData.id}
          className="cover sprite_cover"
        ></a>
      </div>
      <div className="album-info">
        <div className="name">{itemData?.name}</div>
        <div className="artist">{itemData?.artist?.name}</div>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbumItem)

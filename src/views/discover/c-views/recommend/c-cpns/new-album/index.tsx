import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  return (
    <AlbumWrapper>
      <SectionHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button className="sprite_02 arrow arrow-left"></button>
        <button className="sprite_02 arrow arrow-right"></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)

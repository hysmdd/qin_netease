import React, { memo, useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { AlbumWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import { Carousel } from 'antd'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  /** 定义内部数据 */
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  /** 事件处理函数 */
  function handlePrevClick() {
    bannerRef.current?.prev()
    console.log('上一个')
  }
  function handleNextClick() {
    bannerRef.current?.next()
    console.log('下一个')
  }

  return (
    <AlbumWrapper>
      <SectionHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel dots={false} speed={1500}>
            {[1, 2, 3].map((item) => {
              return (
                <div key={item}>
                  <h2>{item}</h2>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
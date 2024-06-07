import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV1Wrapper } from './style'

interface IProps {
  children?: ReactNode
}

const SectionHeaderV1: FC<IProps> = () => {
  const keywords = ['华语', '流行', '摇滚']

  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">热门推荐</h3>
        <div className="keywords">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <a className="more" href="#">
          更多
        </a>
        <i className="sprite_02 icon"></i>
      </div>
    </HeaderV1Wrapper>
  )
}

export default memo(SectionHeaderV1)

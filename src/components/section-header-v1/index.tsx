import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV1Wrapper } from './style'

interface IProps {
  children?: ReactNode
  title?: string
  moreLink?: string
  sub?: any[]
}

const SectionHeaderV1: FC<IProps> = (props) => {
  const { title, moreLink, sub } = props

  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {sub &&
            sub?.map((item) => {
              return (
                <div className="item" key={item}>
                  <span className="text">{item}</span>
                  <span className="divider">|</span>
                </div>
              )
            })}
        </div>
      </div>
      <div className="right">
        <a className="link" href={moreLink}>
          更多
        </a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderV1Wrapper>
  )
}

export default memo(SectionHeaderV1)

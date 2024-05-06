import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import headerTitles from '@/assets/data/header_titles.json'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  function showItem(item: any) {
    if (item.type === 'path') {
      return <Link to={item.link}>{item.title}</Link>
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
          {/* <Link to="/discover">发现音乐</Link>
          <Link to="/mine">我的音乐</Link>
          <Link to="/friend">关注</Link>
          <Link to="/download">下载客户端</Link> */}
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)

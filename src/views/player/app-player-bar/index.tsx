import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {
  PlayerBarControl,
  PlayerBarInfo,
  PlayerBarOperator,
  PlayerBarWrapper
} from './style'
import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <PlayerBarControl>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play"></button>
          <button className="btn sprite_playbar next"></button>
        </PlayerBarControl>
        <PlayerBarInfo>
          <NavLink to="/discover/player">
            <img
              className="image"
              src="https://p2.music.126.net/x-jReyGkM5OTKUEtTqXGoA==/109951164597332931.jpg?param=34y34"
              alt=""
            />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">与我无关</span>
              <span className="singer-name">阿冗</span>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="current">00:52</span>
                <span className="divider">/</span>
                <span className="duration">04:00</span>
              </div>
            </div>
          </div>
        </PlayerBarInfo>
        <PlayerBarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </PlayerBarOperator>
      </div>
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)

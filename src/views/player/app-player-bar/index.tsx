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
import { useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  const { currentSong } = useAppSelector((state) => ({
    currentSong: state.player.currentSong
  }))
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
              src={getImageSize(currentSong?.al?.picUrl, 50)}
              alt=""
            />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <span className="singer-name">{currentSong?.ar[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider value={35} />
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

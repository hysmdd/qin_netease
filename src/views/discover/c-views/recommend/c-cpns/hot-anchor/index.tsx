import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AnchorWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = () => {
  return <AnchorWrapper>HotAnchor</AnchorWrapper>
}

export default memo(HotAnchor)

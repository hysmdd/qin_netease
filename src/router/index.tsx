import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

import Discover from '@/views/discover'
import Mine from '@/views/mine'
import Friend from '@/views/friend'
import Download from '@/views/download'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/friend',
    element: <Friend />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes

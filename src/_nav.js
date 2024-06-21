import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  // },
  {
    component: CNavTitle,
    name: 'Admin Side',
  },
  {
    component: CNavGroup,
    name: 'ALL MANU',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'PHOTOS',
        to: '/photo',
      },
      {
        component: CNavItem,
        name: 'VDIEO',
        to: '/vdieo',
      },
    ],
  },

  {
    component: CNavTitle,
    name: 'User Side',
  },
]

export default _nav

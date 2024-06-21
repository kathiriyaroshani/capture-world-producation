import React from 'react'
// import Photo from './views/Photo/Photo'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Photo = React.lazy(() => import('./views/category/Photo'))
const Vdieo = React.lazy(() => import('./views/product/Vdieo'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/Photo', name: 'photo', element: Photo, exact: true },
  { path: '/Vdieo', name: 'Vdieo', element: Vdieo, exact: true },
]

export default routes

import { createBrowserRouter, Navigate } from 'react-router'
import App from '../App'
import Home from '../views/home'

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Home
      }
    ]
  },
  {
    path: '/404',
    Component: () => <div>404</div>
  },
  {
    path: '/403',
    Component: () => <div>403</div>
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  }
])
export default router

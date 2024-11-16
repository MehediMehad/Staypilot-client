import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Main from '../layouts/Main'
import RoomDetails from '../pages/RoomDetails/RoomDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <RoomDetails />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
])
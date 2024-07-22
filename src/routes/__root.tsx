import { createRootRoute,  Outlet } from '@tanstack/react-router'
import Navbar from '../components/Navbar'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar/>
      <Outlet />
      <p className='text-light mx-auto w-max my-5'>© Copyright 2024 | Mahmoud Samir | All Rights Reserved</p>
    </>
  ),
})

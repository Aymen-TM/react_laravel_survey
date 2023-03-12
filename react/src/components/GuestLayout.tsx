import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

type Props = {}

const GuestLayout = (props: Props) => {

  const {userToken} = useStateContext()

  if(userToken){
      return <Navigate to={"/"} />
  }

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default GuestLayout
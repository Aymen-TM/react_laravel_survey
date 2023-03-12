import React from 'react'
import PageComponent from '../components/PageComponent'

type Props = {}

const DashBoard = (props: Props) => {
  return (
    <PageComponent title='DashBoard' buttons=''>
      children
    </PageComponent>
  )
}

export default DashBoard
import React from 'react'
import ButtonAppBar from '../components/navbar'
import SwipeableTemporaryDrawer from '../components/sidenav'


function Dashboard() {
  return (
    <div>
      <ButtonAppBar />
      <SwipeableTemporaryDrawer />
    </div>
  )
}

export default Dashboard
import React from 'react'
import ButtonAppBar from '../components/NavBar'

function Dashboard() {
  return (
    <body className='w-screen l-screen'>
      <ButtonAppBar />
      <div className='text-gray-600 flex'>
        <h1>Sponsor Name</h1>
        <div>Cases in Progress: 1
          <div>
            Cases Completed: 1
          </div> 
          
        </div>
      </div>
      <div className='bg-red-100'>
        <div className=''>
          <h2>Cards</h2>
        </div>
      </div>
      <div className='bg-green-100'>
        <p>**Limited to a total of (4) sponsorships at a time**</p>
      </div>
      
    </body>
  )
}

export default Dashboard
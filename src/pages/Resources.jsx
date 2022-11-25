import React from 'react';
import ButtonAppBar from "../components/NavBar";
import StickyFooter from '../components/Footer';
function Resources() {
  return (
    <div>
      <div>
        <ButtonAppBar />      
      </div>
      <div className="flex flex-col h-screen justify-center items-center ">
        <h1 className="text-5xl font-extrabold tracking-tight mb-20">
          Veteran Resources To Get You Started
        </h1>
        <ul className="space-y-12 underline text-4xl mt-8">
          <li>
            <a href="https://www.va.gov/homeless/nationalcallcenter.asp">
            National Call Center for Homeless Veterans at (877) 4AID-VET (877-424-3838)
            </a>
          </li>
          <li>
            <a href="https://www.va.gov/HOMELESS/index.asp">
              VA Homeless Programs (General Information)
            </a>
          </li>
          <li>
            <a href="https://www.va.gov/homeless/housing.asp">
              Housing Solutions
            </a>
          </li>
          <li>
            <a href="https://www.va.gov/homeless/health_care.asp">
              Health Care
            </a>
          </li>
          <li>
            <a href="https://www.va.gov/HOMELESS/HVCES.asp">
              Homeless Veterans Community Employment Services
            </a>
          </li>
          <li>
            <a href="https://www.va.gov/records/get-military-service-records/">
            Request military service records
            </a>
          </li>
        </ul>
      </div>
      <StickyFooter />
    </div>    
  )
}
export default Resources
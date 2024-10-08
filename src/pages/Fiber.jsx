import React from 'react'
import PostpaidFiber from '../sections/Fiber/PostpaidFiber'
import GetBharatFiber from '../sections/Fiber/GetBharatFiber'
import PrepaidFiber from '../sections/Fiber/PrepaidFiber'



const Fiber = () => {
  return (
    <div className="container">
        <GetBharatFiber/>
    <PostpaidFiber/>
    <PrepaidFiber/>
  </div>
  )
}

export default Fiber
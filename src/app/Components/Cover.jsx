import Image from 'next/image'
import React from 'react'

const Cover = () => {
  return (
    <div className='cover-section'>
      <Image className='image-cover'
        src='https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80'
        alt="Picture of a triangle"
        width={2500}
        height={2000}
      />
      <div className='welcome-msg'>
        <h1 className='msg-heading'>Welcome to <span>Doctor's Club & Gym</span></h1>
        <p className='msg-para'>Step Inside and Unleash Your Potential.</p>
      </div>
    </div>
  )
}

export default Cover

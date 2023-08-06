import Image from 'next/image'
import React from 'react'
import logoPic from '../../../public/logo.jpg'

const Logo = () => {
  return (
    <div>
        <Image
            className='logo-dc'
            src={logoPic}
            alt="Doctors Club Logo"
            width={55}
            height={55}
        />
    </div>
  )
}

export default Logo

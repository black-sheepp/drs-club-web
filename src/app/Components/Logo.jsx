import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image
            className='logo-dc'
            src="/../public/logo.jpg"
            alt="Doctors Club Logo"
            width={55}
            height={55}
        />
    </div>
  )
}

export default Logo

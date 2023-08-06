import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image
            className='logo-dc'
            src="/../public/logo.png"
            alt="Picture of a triangle"
            width={55}
            height={55}
        />
    </div>
  )
}

export default Logo

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {NavbarRight, NavbarLeft} from '../Navbar/Navbar'



const Footer = () => {
  return (
    <header className='w-full h-[95px] mt-10 mb-5 '>
      <div className="container mx-auto h-full flex flex-col items-start">
        <div className="relative w-full h-full flex items-center justify-between mt-5">
            <NavbarLeft containerStyle={'text-black font-medium text-xl font-inter '} />
                <Link href="/" className=' text-black font-literata font-bold text-4xl w-[190px] h-[50px]'>
                    MyGallery
                </Link> 
            <div>
              <div className="flex items-center justify-center gap-10">
                <NavbarRight containerStyle={'text-black font-medium text-xl font-inter'} />
                <Link href="/login" className='text-white font-inter font-medium text-xl bg-gol rounded-md py-1 px-[18px]'>Войти</Link>
              </div>
            </div>
        </div>
        <div className='flex justify-center items-center gap-4 mt-2'>
          <Link href={"/"}>
            <Image alt='' src={"/assets/svg/T.png"} width={30} height={30}></Image>
          </Link>
          <Link href={"/"}>
            <Image alt='' src={"/assets/svg/W.png"} width={30} height={30}></Image>
          </Link>
          <Link href={"/"}>
            <Image alt='' src={"/assets/svg/V.png"} width={30} height={30}></Image>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Footer
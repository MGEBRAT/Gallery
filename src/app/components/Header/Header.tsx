"use client"
import Image from 'next/image'
import Link from 'next/link'

import React, { useEffect } from 'react'
import {NavbarRight, NavbarLeft} from '../Navbar/Navbar'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';



const Header = () => {

  const { user } = useKindeBrowserClient();
  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <header className='w-full h-[70px]  '>
      <div className="container mx-auto h-full flex items-center">
        <div className="relative w-full h-full flex items-center justify-between mt-5">
            <NavbarLeft containerStyle={'font-inter font-medium text-xl'} />
                <Link href="/" className='font-literata font-bold text-4xl w-[190px] h-[50px]'>
                    MyGallery
                </Link> 
            <div>
              <div className="flex items-center justify-center gap-10">
                <NavbarRight containerStyle={'font-inter font-medium text-xl '} />
               {user ?
                <>
                  <div className='flex items-center gap-1'>
                    <LogoutLink className="text-white font-inter font-medium text-xl bg-korich rounded-md py-1 px-[18px]">Выйти</LogoutLink>
                    {/* <button className="text-white font-inter font-medium text-xl bg-korich rounded-md py-1 px-[18px]"  >Профиль</button> */}
                  </div>
                </>
                :
                <>
                  <div className='flex items-center gap-2'>
                    <RegisterLink className="text-white font-inter font-medium text-xl bg-korich rounded-md py-1 px-[18px]">Регистрация</RegisterLink>
                    <LoginLink className="text-white font-inter font-medium text-xl bg-korich rounded-md py-1 px-[18px]">Войти</LoginLink>
                    </div>
                </>
              }
              </div>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
"use client";

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';



export default function page() {

  const {user} = useKindeBrowserClient();

  return (
    <section className='w-full py-16 h-[700px]'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-start">
          {user?.picture && <Image className='w-[150px] h-[150px] rounded-full object-cover object-center ' src={user.picture} alt={'Изображение профиля'} width={150} height={150} />}
          <h2 className="font-medium text-black uppercase text-2xl mt-12">Логин: {user?.email}</h2>
          <h3 className="font-medium text-black  text-2xl mt-2">Ник: {user?.family_name} {user?.given_name}</h3>
        </div>
        <div className=''>
            <div className='flex items-center justify-center mt-4'> 
                <h2 className='text-3xl font-literata  text-black'>Избранное</h2>
            </div>
            
        </div>
      </div>
    </section>
  )
}
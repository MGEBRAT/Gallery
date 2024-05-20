import Link from 'next/link';
import React from 'react';

// menuData 
const leftLinks = [
  { label: 'Главная', url: '/' },
  { label: 'Картины', url: '/images' },
  { label: 'Авторы', url: '/autors' },
];

const rightLinks = [
    { label: 'Контакты', url: '/contacts' }
];

export const NavbarLeft = ( { containerStyle } : { containerStyle: string } ) => {
  return (
    <nav className="">
      <menu className="w-full flex items-center justify-center gap-10">
        {leftLinks.map(( item, index ) => {
          return (
            <>
              <li key={index}>
                <Link href={item.url} className={`${containerStyle}`}>{item.label}</Link>
              </li>
            </>
          )
        })}
      </menu>
    </nav>
  )
}

export const NavbarRight = ( { containerStyle } : { containerStyle: string } ) => {
    return (
      <nav className="">
        <menu className="w-full flex items-center justify-center gap-4">
          {rightLinks.map(( item, index ) => {
            return (
              <>
                <li key={index}>
                  <Link href={item.url} className={`${containerStyle}`}>{item.label}</Link>
                </li>
              </>
            )
          })}
        </menu>
      </nav>
    )
  }
'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import logo from '@/assets/logos/logo-black.svg'
import menuIcon from '@/assets/icons/menu.svg'
import close from '@/assets/icons/close.svg'
import Link from "next/link";
import {usePathname} from "next/navigation";

function Header() {
  const [sticky, setSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    {
      name: "Home",
      path: '/'
    },
    {
      name: "All products",
      path: "/products"
    },
    {
      name: "Favourites",
      path: "/favourites"
    },
    {
      name: "Cart",
      path: "/cart"
    },
    {
      name: "Orders",
      path: "/orders"
    }
  ]
  const pathname = usePathname()

  function toggleScticky() {
    if (window.scrollY > 50) setSticky(true);
    else setSticky(false);
  }

  function isActive(path: string) {
    return pathname === path
  }

  useEffect(function () {
    document.addEventListener('scroll', toggleScticky);
    return () => document.removeEventListener('scroll', toggleScticky);
  }, []);

  return (
    <header className={`${pathname === '/' && 'bg-[#F9F9F9]'} pt-4 lg:pt-8 ${sticky && "sticky"}`}
    >
      <div
        className={'bg-[#EAEAEA] flex items-center w-[95vw] justify-between rounded-[1.6rem] py-[.8rem] lg:px-[3rem] px-[2rem] lg:w-[820px] mx-auto'}>
        <Link href={'/'}>
          <Image src={logo} alt={"Logo style black"}/>
        </Link>
        <nav>
          <ul
            className={`fixed z-20 top-0 left-0 bg-[#EAEAEA] w-full h-full flex flex-col gap-[4rem] justify-center text-[2rem] ${isMenuOpen ? '  translate-x-0' : 'translate-x-full'} transition-all lg:bg-none lg:translate-x-0 lg:relative lg:flex items-center lg:flex-row lg:gap-[2.4rem] font-medium lg:text-[1.5rem] text-dark`}>
            <Image src={logo} alt={"Logo style black"} className={"lg:hidden absolute top-12 left-10"}/>
            <Image src={close} alt={"close menu"} onClick={() => setIsMenuOpen(prev => !prev)}
                   className={"w-[24px] lg:hidden absolute top-10 right-10"}/>
            {links.map(({name, path}, key) => (
              <li key={key} onClick={() => setIsMenuOpen(prev => !prev)}
                  className={`hover:text-primary transition-all ${isActive(path) ? "text-primary" : ''}`}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
            <Link className={'btn-primary text-[2rem] px-12 lg:hidden'} href={'/'}>Sign Up</Link>
          </ul>
        </nav>
        <div className={'text-dark flex items-center gap-[1rem] font-medium text-[1.5rem]'}>
          <Link href={'/'} className={"py-[1.2rem] px-[1.6rem]"}>Login</Link>
          <Link className={'btn-primary hidden md:block'} href={'/'}>Sign Up</Link>
          <Image src={menuIcon} alt={"menu icon"} onClick={() => {
            setIsMenuOpen(prev => !prev)
          }}
                 className={`${isMenuOpen ? 'hidden' : ''} lg:hidden w-[32px] cursor-pointer`}/>
        </div>
      </div>

    </header>
  );
}

export default Header;
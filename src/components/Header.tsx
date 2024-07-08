'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import logo from '@/assets/logos/logo-black.svg'
import menuIcon from '@/assets/icons/menu.svg'
import close from '@/assets/icons/close.svg'
import Link from "next/link";
import {usePathname} from "next/navigation";
import wishlist from "@/assets/icons/heart-black.svg"
import cart from "@/assets/icons/cart-black.svg"
import ArrowDown from "@/assets/icons/arrow-down-01.svg"

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
      name: "My Orders",
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
        className={'bg-[#EAEAEA] flex items-center w-[95vw] justify-between rounded-[1.6rem] py-[1.6rem] lg:px-[3rem] px-[2rem] lg:w-[820px] mx-auto z-20'}>
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
            <li onClick={() => setIsMenuOpen(prev => !prev)}
                className={`hover:text-primary transition-all lg:hidden ${isActive('/wishlist') ? "text-primary" : ''}`}>
              <Link href={'/wishlist'}>Wishlist</Link>
            </li>
            <li onClick={() => setIsMenuOpen(prev => !prev)}
                className={`hover:text-primary transition-all lg:hidden ${isActive('/cart') ? "text-primary" : ''}`}>
              <Link href={'/cart'}>Cart</Link>
            </li>
            <Link className={'btn-primary text-[2rem] px-12 lg:hidden'} href={'/'}>Sign Up</Link>
          </ul>
        </nav>
        <div className={'text-dark flex items-center gap-8 font-medium text-[1.5rem]'}>
          <div className={"lg:flex gap-4 items-center hidden"}>
            <Image src={wishlist} alt={"Wishlisht icon navigation"} className={"w-[24px]"}/>
            <Image src={cart} alt={"Cart icon navigation"} className={"w-[24px]"}/>
          </div>
          <div className={"hidden lg:flex gap-4 items-center cursor-pointer"}>
            <span
              className={"font-semibold text-[1.2rem] text-white w-12 h-12 flex items-center justify-center rounded-full bg-primary"}>AD</span>
            <Image src={ArrowDown} alt={"Arrow down icon navigation"} className={"w-[24px]"}/>
          </div>
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
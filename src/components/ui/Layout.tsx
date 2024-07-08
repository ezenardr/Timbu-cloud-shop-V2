'use client'
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {usePathname} from "next/navigation";

function Layout({children}: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log(pathname)
  const routes = ['/', 'products', 'products/id']
  return (
    <>
      <Header/>
      {children}
      {(pathname != '/cart') && <Footer/>}
    </>
  );
}

export default Layout;
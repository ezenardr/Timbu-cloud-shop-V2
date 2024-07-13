import React from 'react';
import Image from "next/image";
import searcIcon from "@/assets/icons/search-dark.svg";
import Footer from "@/components/Footer";
import ProductsList from "@/app/products/ProductsList";
import {dehydrate, HydrationBoundary, QueryClient} from '@tanstack/react-query'
import {getProducts} from "@/actions/products";

async function Page({searchParams, params}: { searchParams: { [key: string]: number }; params: { id: string } }) {
  const page = searchParams.page ?? 1
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(12, page)
  })
  return (
    <>
      <main className={'px-8 lg:px-24 mt-20 flex flex-col items-center gap-12 overflow-x-hidden'}>
        {/*  topbar*/}
        <div className={'flex items-center justify-between w-full'}>
          {/*actions*/}
          <div className={'flex gap-[1.6rem]'}>
            <button className={'bg-[#EAEAEA] py-[1.2rem] px-[1.6rem] rounded-[8px] text-[1.5rem] text-[#2a2a2a]'}>Filter
            </button>
            <button className={'bg-[#EAEAEA] py-[1.2rem] px-[1.6rem] rounded-[8px] text-[1.5rem] text-[#2a2a2a]'}>Sort
            </button>
          </div>
          {/*  end actions*/}
          <ul className={' hidden text-[1.5rem] font-medium text-[#555555] lg:flex border-b-[1px]'}>
            <li className={'py-[1.2rem] px-[1.6rem] text-[#2a2a2a] border-b-4 border-[#2a2a2a]'}>All Products</li>
            <li className={'py-[1.2rem] px-[1.6rem]'}>Iconic Casual Brands</li>
            <li className={'py-[1.2rem] px-[1.6rem]'}>Athletic/Sportswear Brands</li>
            <li className={'py-[1.2rem] px-[1.6rem]'}>Luxury Fashion Brands</li>
          </ul>
          <div
            className={'py-[1.2rem] px-[1.6rem] bg-[#ededed] border border-[#e4e4e4] rounded-[.8rem] flex gap-4 w-[208px] lg:w-[272px]'}>
            <Image src={searcIcon} alt={"Search icon dark hero"}/>
            <input type={'text'} placeholder={'Search'}
                   className={'text[#68707A] bg-transparent w-full text-[1.5rem] outline-none'}/>
          </div>
        </div>
        <div className={'overflow-x-scroll scrollbar-hide w-full lg:hidden'}>
          <ul
            className={' flex text-nowrap flex-nowrap px-8 text-[1.5rem] font-medium text-[#555555]  border-b-[1px]'}>
            <li className={'py-[1.2rem] px-[1.6rem] text-[#2a2a2a] border-b-4 border-[#2a2a2a]'}>All Products</li>
            <li className={'py-[1.2rem] px-[1.6rem]'}>Iconic Casual Brands</li>
            <li className={'py-[1.2rem] px-[1.6rem]'}>Athletic/Sportswear Brands</li>
            <li className={'py-[1.2rem] px-[1.6rem]'}>Luxury Fashion Brands</li>
          </ul>
        </div>
        {/*  end topbar*/}

        {/*  products*/}

        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductsList page={page}/>
        </HydrationBoundary>

      </main>
      <Footer/>
    </>
  );
}

export default Page;
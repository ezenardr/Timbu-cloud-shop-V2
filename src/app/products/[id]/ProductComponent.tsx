'use client'
import React, {useContext} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getProductById} from "@/actions/products";
import {Carousel} from "flowbite-react";
import Image from "next/image";
import wishActive from "@/assets/icons/heart-full.svg";
import star from "@/assets/icons/half-star-yellow.svg";
import {Link} from "next-view-transitions";
import {CartContext} from "@/lib/CartProvider";

function ProductComponent({org_id, product_id}: { org_id: string, product_id: string }) {
  const {data: product, isLoading} = useQuery({
    queryKey: ['product'],
    queryFn: () => getProductById(product_id, org_id)
  })
  const imageUrl = 'https://api.timbu.cloud/images/'
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'HTG'
  });
  // @ts-ignore
  const {items, setItems} = useContext(CartContext)
  const item = items.find((uniqueProduct: any) => uniqueProduct.id === product_id)
  if (isLoading) return <p>loading...</p>
  return (
    <>
      <div className={"hidden lg:flex items-center divide-x-2  py-[1.2rem] text-[1.2rem] text-[#9d9d9d]"}>
        <Link href={'/products'} className={'px-[1rem]'}>All Products</Link>
        <Link href={'/products'} className={'px-[1rem]'}>Iconic Casual Brand</Link>
        <p className={'pl-[1rem] font-medium text-primary text-[1.5rem]'}>{product.name}</p>
      </div>
      <div className={"flex flex-col lg:flex-row gap-10"}>
        {/*carousel*/}
        <div className="lg:hidden h-[300px]">
          <Carousel leftControl="" rightControl="">
            <Image width={400} height={100} src={`${imageUrl}${product.photos[0].url}`}
                   alt="Ego Vessel trainer blue 8"/>
            <Image width={400} height={100} src={`${imageUrl}${product.photos[1].url}`}
                   alt="Ego Vessel trainer blue 5"/>
            <Image width={400} height={100} src={`${imageUrl}${product.photos[2].url}`}
                   alt="Ego Vessel trainer blue 6"/>
            <Image width={400} height={100} src={`${imageUrl}${product.photos[3].url}`}
                   alt="Ego Vessel trainer blue 7"/>
          </Carousel>
        </div>
        {/*  products images*/}
        <div className={'flex-1 hidden lg:grid grid-cols-3 gap-8'}>
          <div
            className={"bg-white col-start-1 col-end-4 p-12 flex items-center justify-center h-[300px] rounded-[1rem] "}>
            <Image width={240} height={200} className={'hover:scale-110 transition-all'}
                   src={`${imageUrl}${product.photos[0].url}`}
                   alt={"Ego Vessel trainer blue 1"}/>
          </div>
          <Image width={186} height={100}
                 className={"bg-white rounded-[1rem] p-10 hover:scale-110 transition-all h-[150px] w-[180px]"}
                 src={`${imageUrl}${product.photos[1].url}`}
                 alt={"Ego Vessel trainer blue 2"}/>
          <Image width={186} height={100}
                 className={"bg-white rounded-[1rem] p-10 hover:scale-110 transition-all h-[150px] w-[180px]"}
                 src={`${imageUrl}${product.photos[2].url}`}
                 alt={"Ego Vessel trainer blue 3"}/>
          <Image width={186} height={100}
                 className={"bg-white rounded-[1rem] p-10 hover:scale-110 transition-all h-[150px] w-[180px]"}
                 src={`${imageUrl}${product.photos[3].url}`}
                 alt={"Ego Vessel trainer blue 4"}/>
        </div>
        {/*text*/}
        <div className={'flex-1 flex flex-col gap-4'}>
          <span className={'text-[1.5rem] text-[#2a2a2a]'}>Iconic Causal Brands</span>
          <div className={'flex flex-col relative pb-2 justify-between'}>
            <h1 className={'font-medium text-[3.7rem] text-[#2a2a2a]'}>{product.name}</h1>
            <Image src={wishActive} alt={"Added to wishlist"}
                   className={`bg-[#D42620] absolute top-0 right-0  w-[3rem] h-[3rem] p-[6px] rounded-full cursor-pointer hover:bg-[#D42620] transition-all`}/>
            <span className={'font-medium text-[1.9rem]'}>{USDollar.format(Number(product.current_price))}</span>
          </div>
          <span className={'text-[1.2rem] text-[#555555] font-medium flex gap-2'}>100 sold
            <Image src={star}
                   alt={"half stat rating"}/> 4.5 (32 reviews)
          </span>
          {/*description*/}
          <div>
            <span className={'font-medium text-[#2a2a2a] text-[1.9rem]'}>Description</span>
            <p className={'text-[1.5rem] text-[#555555] text-justify'}>The Ego Vessel is the perfect addition to your
              casual
              wardrobe. Pair them with jeans, joggers, or even a dress for an effortlessly cool look that&apos;s sure
              to
              make
              a statement. Whether you&apos;re running errands or hitting the town, these versatile sneakers will keep
              you
              feeling and looking your best.</p>
          </div>
          {/*  Quantity*/}
          <div>
            <span className={"font-medium text-[#2a2a2a] text-[1.9rem]"}>Quantity</span>
            <div
              className={'flex gap-[1.6rem] bg-[#f9f9f9] py-[4px] px-[16px] text-[1.5rem] text-[#2a2a2a] rounded-[4px] w-[121px] items-center justify-between'}>
              <button className={'py-[4px] px-[8px] cursor-pointer'}
                      onClick={() => setItems((prev: any) => {
                        prev.map((p: any) => {
                          if (p.id === product.id) {
                            return p.quantity > 1 ? p.quantity = p.quantity - 1 : null
                          }
                        })
                        return [...prev]
                      })}>-
              </button>
              <span className={'bg-[#0072C61F] py-[4px] px-[8px] rounded-[2px]'}>{item.quantity}</span>
              <button className={'py-[4px] px-[8px] cursor-pointer'} onClick={() => setItems((prev: any) => {
                prev.map((p: any) => {
                  if (p.id === product.id) {
                    return p.quantity = p.quantity + 1
                  }
                })
                return [...prev]
              })}>+
              </button>
            </div>
          </div>
          {/*  prices*/}
          <div className={'flex flex-col lg:flex-row gap-6 lg:gap-0 lg:items-center justify-between'}>
            <div className={'flex flex-col gap-6 justify-between '}>
              <span className={"text-[12px] text-[#9d9d9d]"}>Total Price</span>
              <p
                className={'font-medium text-[1.9rem] text-[#2a2a2a]'}>{USDollar.format(Number(product.current_price * item.quantity))}</p>
            </div>
            <div className={'flex gap-[1.6rem] items-center'}>
              <Link href={'/cart'} className={'btn-secondary'}>Go to Cart</Link>
              <Link href={'/checkout'} className={'btn-primary'}>Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductComponent;
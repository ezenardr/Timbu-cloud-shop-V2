'use client'
import React, {useContext, useState} from 'react';
import Image, {StaticImageData} from "next/image";
import star from "@/assets/icons/half-star-yellow.svg";
import {Link} from 'next-view-transitions'
import wishlist from "@/assets/icons/heart.svg"
import wishActive from "@/assets/icons/heart-full.svg"
import newPairWhite from "@/assets/img/new-pair-white-sneakers-isolated-white.png"
import {CartContext} from "@/lib/CartProvider";

export default function ProductCard({
                                      image = newPairWhite,
                                      product,
                                      link,
                                      subtitle = 'Iconic Casual Brand',
                                      title,
                                      rating = '4.5 (100 sold)',
                                      price,
                                    }: {
  image?: StaticImageData | string,
  subtitle?: string,
  title: string,
  rating?: string,
  price: string
  link: string
  product: any
}) {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'HTG'
  });
  // @ts-ignore
  const {items, setItems} = useContext(CartContext)
  const [liked, setLiked] = useState(false)
  return (
    <div className={'flex flex-col h-full min-h-[400px]'}>
      {/*card img*/}
      <div
        className={"bg-white max-h-[300px] overflow-hidden flex items-center justify-center relative flex-1 rounded-[.8rem] mb-4"}>
        <Link href={link} onClick={() => setItems((prev: any) => {
          const result = items.find((p: any) => p.id === product.id)
          if (result) {
            return [...prev]
          }
          return [...prev, {...product, quantity: 1}]
        })}><Image src={image} width={290} height={300} alt={title}/></Link>
        <Image src={liked ? wishActive : wishlist} alt={"Add to wishlist"} onClick={() => setLiked(prev => !prev)}
               className={`absolute top-3 right-3 ${liked ? 'bg-[#D42620]' : 'bg-[#00000099]'}  w-[3rem] h-[3rem] p-[6px] rounded-full cursor-pointer hover:bg-[#D42620] transition-all`}/>
      </div>
      <div>
        <span className={"text-[#2A2A2A] mb-4 text-[1.2rem] "}>{subtitle}</span> <br/>
        <Link href={link} className={"font-medium text-[1.9rem]"} onClick={() => setItems((prev: any) => {
          const result = items.find((p: any) => p.id === product.id)
          if (result) {
            return [...prev]
          }
          return [...prev, {...product, quantity: 1}]
        })}>{title}</Link>
        <div className={"flex gap-[.4rem] pb-4 "}>
          <Image src={star} alt={"half stat rating"}/>
          <span className={"font-medium text-[1.2rem]"}>{rating}</span>
        </div>
        <div className={"flex items-center justify-between"}>
          <div className={"flex gap-2 font-medium text-[1.9rem]"}>
            <p>{USDollar.format(Number(price))}</p>
          </div>
          <button onClick={() => setItems((prev: any) => {
            const result = items.find((p: any) => p.id === product.id)
            if (result) {
              return [...prev]
            }
            return [...prev, {...product, quantity: 1}]
          })} className={'btn-secondary'}>Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
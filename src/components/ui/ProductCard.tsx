import React from 'react';
import Image, {StaticImageData} from "next/image";
import star from "@/assets/icons/half-star-yellow.svg";
import {Link} from 'next-view-transitions'
import wishlist from "@/assets/icons/heart.svg"
import wishActive from "@/assets/icons/heart-full.svg"

export default function ProductCard({image, subtitle, title, rating, price, liked, discount}: {
  image: StaticImageData,
  subtitle: string,
  title: string,
  rating: string,
  price: string
  liked?: boolean
  discount?: string
}) {
  return (
    <div className={'flex flex-col h-full min-h-[400px]'}>
      {/*card img*/}
      <div
        className={"bg-[#EAEAEA] h-[300px] flex items-center justify-center relative flex-1 rounded-[.8rem] mb-4"}>
        <Link href={'/products/id'}><Image src={image} width={290} height={300} alt={title}/></Link>
        <Image src={liked ? wishActive : wishlist} alt={"Add to wishlist"}
               className={`absolute top-3 right-3 ${liked ? 'bg-[#D42620]' : 'bg-[#00000099]'}  w-[3rem] h-[3rem] p-[6px] rounded-full cursor-pointer hover:bg-[#D42620] transition-all`}/>
      </div>
      <div>
        <span className={"text-[#2A2A2A] mb-4 text-[1.2rem] "}>{subtitle}</span> <br/>
        <Link href={'/products/id'} className={"font-medium text-[1.9rem]"}>{title}</Link>
        <div className={"flex gap-[.4rem] pb-4 "}>
          <Image src={star} alt={"half stat rating"}/>
          <span className={"font-medium text-[1.2rem]"}>{rating}</span>
        </div>
        <div className={"flex items-center justify-between"}>
          <div className={"flex gap-2 font-medium text-[1.9rem]"}>
            <p className={` ${discount && "text-primary"}`}># {price}</p>
            {discount &&
                <div className={"text-[#9D9D9D] text-center px-3 relative"}># {discount}
                    <div className={"h-[2px] w-full bg-black absolute left-0 top-1/2"}></div>
                </div>}
          </div>
          <Link href={'/cart'} className={'btn-secondary'}>Add to Cart</Link>
        </div>
      </div>
    </div>
  );
}
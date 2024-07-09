import React from 'react';
import newblackSneak from "@/assets/img/new-black-sneakers-isolated-white-background.png"
import Image from "next/image";
import pairTrainerblue from "@/assets/img/pair-trainers-blue.png"
import luxuryFashion from "@/assets/img/Luxury Fashion Brands.png"
import sportRunning from "@/assets/img/sport-running-shoes.png"
import Link from "next/link";
import close from "@/assets/icons/close.svg"

function Cart() {
  const products = [
    {
      img: newblackSneak,
      title: "Ego Raid",
      colorTitle: 'Blue',
      color: "#141B34",
      size: "39",
      quantity: "1",
      price: '37,000.00'
    },
    {
      img: pairTrainerblue,
      title: "Ego Vessel",
      colorTitle: 'Blue',
      color: "#0266B8",
      size: "38",
      quantity: "2",
      price: '37,000.00'
    }, {
      img: luxuryFashion,
      title: "Balenciaga",
      colorTitle: 'Yellow',
      color: "#E89705",
      size: "40",
      quantity: "1",
      price: '37,000.00'
    }, {
      img: sportRunning,
      title: "Ego Feminine",
      colorTitle: 'Pink',
      color: "#EC064F",
      size: "41",
      quantity: "1",
      price: '37,000.00'
    },
  ]
  return (
    <main className={"px-4 lg:px-56 mt-20 mb-60 "}>
      {/*thumbnails*/}
      <div className={"flex items-center divide-x-2 px-[1.6rem] py-[1.2rem] text-[1.2rem] text-[#9d9d9d]"}>
        <Link href={'/'} className={'pr-[1rem]'}>Home</Link>
        <Link href={'/cart'} className={'px-[1rem] font-medium text-primary text-[1.5rem]'}>My Cart</Link>
      </div>

      <section className={"mt-12 max-w-[850px] mx-auto"}>
        {/*cart list*/}
        <ul className={"flex flex-col gap-[1.6rem]"}>
          {products.map(({img, colorTitle, color, title, size, quantity, price}, key) => (

            <li key={key}
                className={"flex flex-col lg:flex-row lg:items-center border border-[#f9f9f9] py-8 px-2 lg:p-8 rounded-[8px] justify-between"}>
              <div className={"flex gap-4 items-center relative"}>
                <div className={'p-10 bg-[#eaeaea] rounded-[1rem]'}>
                  <Image width={80} height={100} src={img} alt={"new black sneakers isolated"}
                         className={"hover:scale-110 transition-all "}/>
                </div>
                <div className={'flex flex-col gap-4'}>
                  <span className={"font-medium text-[1.9rem] text-[#2a2a2a]"}>Ego Raid</span>
                  <div className={'flex divide-x'}>
                    <div className={"gap-2 flex items-center pr-3"}>
                      <div
                        className={`rounded-[4px] bg-[${color}] cursor-pointer hover:scale-105 transition-all w-[24px] h-[24px]`}>
                      </div>
                      <span className={"text-[1.2rem] text-[#555555]"}>{colorTitle}</span>
                    </div>
                    <div className={"gap-2 flex items-center pl-3"}>
                  <span
                    className={'text-[1.5rem] text-[#2a2a2a]'}>Size
                  </span>
                      <span className={"text-[1.5rem] text-[#555555] bg-[#f9f9f9] p-2"}>{size}</span>
                    </div>
                  </div>
                  <div className={'flex lg:hidden items-center gap-[.8rem]'}>
                    <div
                      className={'flex gap-[.8rem] px-1 bg-[#f9f9f9] py-[4px]  text-[1.5rem] text-[#2a2a2a] rounded-[4px] w-[105px] items-center justify-between'}>
              <span className={'py-[4px] px-[8px] text-[1.8rem]'}
              >-</span>
                      <span className={'bg-[#0072C61F] py-[4px] px-[8px] rounded-[2px]'}>{quantity}</span>
                      <span className={'py-[4px] text-[1.8rem] px-[8px]'}
                      >+</span>
                    </div>
                    <p className={'font-medium text-[1.5rem]'}>₦ {price}</p>
                    <Image src={close} alt={"delete hidden button"} className={"absolute top-6 right-6"} width={14}/>
                  </div>
                </div>


              </div>
              <div className={'hidden lg:flex items-center gap-[1.6rem]'}>
                <div
                  className={'flex gap-[1.6rem] bg-[#f9f9f9] py-[4px] px-[16px] text-[1.5rem] text-[#2a2a2a] rounded-[4px] w-[121px] items-center justify-between'}>
              <span className={'py-[4px] px-[8px]'}
              >-</span>
                  <span className={'bg-[#0072C61F] py-[4px] px-[8px] rounded-[2px]'}>{quantity}</span>
                  <span className={'py-[4px] px-[8px]'}
                  >+</span>
                </div>
                <p className={'font-medium text-[1.9rem]'}>₦ {price}</p>
                <Image src={close} alt={"delete button"} width={12}/>
              </div>
            </li>

          ))}
        </ul>
      </section>
      <footer
        className={'px-8 lg:px-56 py-8 flex items-center justify-between bg-white shadow-2xl fixed w-full bottom-0 left-0'}>
        <div className={'flex flex-col gap-4'}>
          <span className={'text-[1.2rem] text-[#9d9d9d]'}>Total price</span>
          <span className={'font-medium text-[1.9rem] text-[#2a2a2a]'}>₦ 185,000.00</span>
        </div>
        <Link href={'/checkout'} className={'btn-primary'}>Checkout</Link>
      </footer>
    </main>
  );
}

export default Cart;
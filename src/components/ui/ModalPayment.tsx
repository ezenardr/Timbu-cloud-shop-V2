import React from 'react';
import Link from "next/link";
import Image from "next/image";
import mastercard from "@/assets/icons/mastercard.svg"
import active from "@/assets/icons/active.svg"

function ModalPayment() {
  return (
    <>
      <Link href={'/checkout'} className={
        'fixed top-0 left-0 w-full h-dvh flex items-center justify-center bg-[#333] bg-opacity-80 transition-all z-[99999]'
      }></Link>
      {/*<div*/}
      {/*  className={'fixed top-0 left-0  w-full lg:w-1/2 mx-auto bg-red-50  flex items-center justify-center z-[99999999]'}>*/}
      <div
        className={'fixed top-[32%]  -translate-y-1/4 z-[999999999] lg:left-1/4 lg:w-1/2 bg-white  rounded-[12px] w-screen h-3/4 overflow-y-scroll scrollbar-hide left-0 right-0  '}>
        <p className={'font-medium text-[1.9rem] text-[#2a2a2a] py-[1.6rem] px-8'}>Select a payment option</p>
        {/*  info*/}

        <div className={'flex flex-col gap-8 py-[1.6rem] px-8'}>
          {/*card*/}
          <div className={'py-8 px-10'}>
            <div className={'flex items-center justify-between'}>
              <div className={'flex gap-4'}>
                <Image src={mastercard} alt={'mastercard icon logo'}/>
                <div className={'flex flex-col  text-[1.2rem] font-medium text-[#1d2939]'}>
                  <p>**** **** **** 1234</p>
                  <p>05/24</p>
                </div>
              </div>
              <Image src={active} alt={"checkbox icon"}/>
            </div>
            <p className={'text-primary text-[1.5rem] pt-4 opacity-20 font-semibold'}>Add a new Card</p>
          </div>
          <form className={'flex-col flex gap-8'}>
            <div className={'flex flex-col gap-2'}>
              <label htmlFor={'name'} className={'text-[1.2rem] text-[#2a2a2a]'}>Full name</label>
              <input name={'name'} type={'text'} id={'name'} placeholder={'Enter your full name'}
                     className={'placeholder:text-[#9d9d9d] placeholder:text-[1.2rem] p-[1.6rem] border border-[#e8eaeb] rounded-[8px] outline-none'}/>
            </div>
            <div className={'flex flex-col gap-2'}>
              <label htmlFor={'name'} className={'text-[1.2rem] text-[#2a2a2a]'}>Email address</label>
              <input name={'name'} id={'name'} type={'email'} placeholder={'Enter your email address'}
                     className={'placeholder:text-[#9d9d9d] placeholder:text-[1.2rem] p-[1.6rem] border border-[#e8eaeb] rounded-[8px] outline-none'}/>
            </div>
            <div className={'flex flex-col gap-2'}>
              <label htmlFor={'name'} className={'text-[1.2rem] text-[#2a2a2a]'}>Phone number</label>
              <input name={'name'} id={'name'} type={'tel'} placeholder={'Enter your phone number'}
                     className={'placeholder:text-[#9d9d9d] placeholder:text-[1.2rem] p-[1.6rem] border border-[#e8eaeb] rounded-[8px] outline-none'}/>
            </div>

          </form>
          {/*  button*/}
          {/*<div className={'py-12 px-8'}>*/}
          <button className={'btn-primary my-12 mx-8'} disabled>Proceed to payment</button>
          {/*</div>*/}
        </div>
      </div>
      {/*</div>*/}
    </>
  );
}

export default ModalPayment;
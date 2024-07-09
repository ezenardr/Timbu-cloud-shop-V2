import React from 'react';
import {Link} from 'next-view-transitions'
import Image from "next/image";
import mastercard from "@/assets/icons/mastercard.svg"
import active from "@/assets/icons/active.svg"
import close from "@/assets/icons/close.svg"

function ModalPayment() {
  return (
    <>
      <div className={
        'fixed top-0 left-0 w-full h-dvh flex items-end lg:items-center justify-center bg-[#333] bg-opacity-80 transition-all z-[99999] overflow-hidden'
      }>
        <div
          className={' bg-white relative rounded-[12px] w-screen lg:w-[500px] flex flex-col items-center justify-center z-[99999999] overflow-hidden'}>
          <div className={'flex w-full items-center justify-between py-[1.6rem] px-8'}>
            <p className={'font-medium text-[1.9rem] text-[#2a2a2a]'}>Select a payment option</p>
            <Link href={'/checkout'}><Image src={close} alt={'close modal btn icon'} width={20}/></Link>
          </div>
          {/*  info*/}
          <div
            className={'flex flex-col w-full h-[400px] overflow-scroll scrollbar-hide mb-[9rem] lg:mb-[9rem] gap-8 py-[1.6rem] px-8'}>
            {/*card*/}
            <div className={''}>
              <div
                className={'flex border border-[#f9fafb] py-8 px-10 rounded-[8px] items-center justify-between'}>
                <div className={'flex gap-4'}>
                  <Image src={mastercard} alt={'mastercard icon logo'}/>
                  <div className={'flex flex-col  text-[1.2rem] font-medium text-[#1d2939]'}>
                    <p>**** **** **** 1234</p>
                    <p>05/24</p>
                  </div>
                </div>
                <Image src={active} alt={"checkbox icon"}/>
              </div>
              <button disabled className={'text-primary text-[1.5rem] pt-4 opacity-20 font-semibold'}>Add a new Card
              </button>
            </div>
            <form className={'flex-col flex gap-8'}>
              <div className={'flex flex-col gap-2'}>
                <label htmlFor={'name'} className={'text-[1.2rem] text-[#2a2a2a]'}>Full name</label>
                <input name={'name'} type={'text'} id={'name'} placeholder={'Enter your full name'}
                       className={'placeholder:text-[#9d9d9d] placeholder:text-[1.2rem] p-[1.6rem] border border-[#e8eaeb] rounded-[8px] outline-none text-[1.2rem] font-medium text-[#2a2a2a] placeholder:font-normal'}/>
              </div>
              <div className={'flex flex-col gap-2'}>
                <label htmlFor={'name'} className={'text-[1.2rem] text-[#2a2a2a]'}>Email address</label>
                <input name={'name'} id={'name'} type={'email'} placeholder={'Enter your email address'}
                       className={'placeholder:text-[#9d9d9d] placeholder:text-[1.2rem] p-[1.6rem] border border-[#e8eaeb] rounded-[8px] outline-none text-[1.2rem] font-medium text-[#2a2a2a] placeholder:font-normal'}/>
              </div>
              <div className={'flex flex-col gap-2'}>
                <label htmlFor={'name'} className={'text-[1.2rem] text-[#2a2a2a]'}>Phone number</label>
                <input name={'name'} id={'name'} type={'tel'} placeholder={'Enter your phone number'}
                       className={'placeholder:text-[#9d9d9d] placeholder:text-[1.2rem] p-[1.6rem] border border-[#e8eaeb] rounded-[8px] outline-none text-[1.2rem] font-medium text-[#2a2a2a] placeholder:font-normal'}/>
              </div>

            </form>
            {/*  button*/}
          </div>
          <div className={'absolute bottom-0 py-12 px-8 flex bg-white w-full z-50'}>
            <Link href={'/checkout?success=true'} className={'btn-primary flex justify-center w-full '}>Proceed to
              payment</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalPayment;
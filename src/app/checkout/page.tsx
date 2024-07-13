'use client'
import React, {useContext} from 'react';
import pairTrainerblue from "@/assets/img/pair-trainers-blue.png";
import Image from "next/image";
import InformationsCard from "@/components/ui/InformationsCard";
import mail from "@/assets/icons/mail-at-sign-01.svg"
import contact from "@/assets/icons/contact.svg"
import phone from "@/assets/icons/smart-phone-02.svg"
import delivery from "@/assets/icons/delivery-tracking-01.svg"
import {Link} from 'next-view-transitions'
import ModalPayment from "@/components/ui/ModalPayment";
import CheckoutSuccess from "@/components/ui/CheckoutSuccess";
import {CartContext} from "@/lib/CartProvider";

function Checkout({searchParams}: { searchParams: { [key: string]: string | undefined } }) {
  const isModal = searchParams.modal || false
  const isSuccess = searchParams.success || false
  // @ts-ignore
  const {items, setItems} = useContext(CartContext)
  const totalPrice = items.reduce((total: any, item: any) => total + item.current_price[0].HTG[0] * item.quantity, 0);
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'HTG'
  });
  return (
    <main className={"px-8 lg:px-56 mt-20 mb-8 flex flex-col gap-[30px] "}>
      {/*payment modal*/}
      {isModal && <ModalPayment/>}
      {isSuccess && <CheckoutSuccess/>}
      {/*end modal*/}
      {/*thumbnails*/}
      <div className={"flex items-center  divide-x-2  py-[1.2rem] text-[1.2rem] text-[#9d9d9d]"}>
        <Link href={'/'} className={'pr-[1rem]'}>Home</Link>
        <Link href={'/cart'} className={'px-[1rem]'}>Cart</Link>
        <Link href={'/checkout'} className={'px-[1rem] font-medium text-primary text-[1.5rem]'}>Checkout</Link>
      </div>
      {/*checkout*/}
      <div className={'flex flex-col lg:flex-row gap-12'}>
        {/*list*/}
        <div className={'flex-1 flex flex-col gap-[30px]'}>
          {/*cart list*/}
          <ul className={"flex flex-col gap-[1.6rem]"}>
            <div className={'flex items-center justify-between'}>
              <span className={'font-medium text-[1.9rem] text-[#2a2a2a]'}>Order list</span>
              <Link href={'/cart'} className={'font-semibold text-primary cursor-pointer text-[1.5rem]'}>Edit</Link>
            </div>
            {items.map(({name, current_price, quantity}: any, key: number) => {
              const price = current_price[0].HTG[0]
              return (
                <li key={key}
                    className={"flex flex-col lg:flex-row lg:items-center border border-[#f9f9f9] py-8 px-2 lg:p-8 rounded-[8px] justify-between"}>
                  <div className={"flex gap-4 lg:gap-8 items-center relative"}>
                    <div className={'p-10 bg-[#eaeaea] rounded-[1rem]'}>
                      <Image width={80} height={100} src={pairTrainerblue} alt={"new black sneakers isolated"}
                             className={"hover:scale-110 transition-all "}/>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                      <span className={"font-medium text-[1.9rem] text-[#2a2a2a]"}>{name}</span>
                      <div className={'flex items-center gap-[1.6rem]'}>
                      <span
                        className={'bg-[#0072C61F] text-[1.5rem] text-[#2a2a2a] py-[4px] px-[8px] rounded-[2px]'}>{quantity}</span>
                        <p className={'font-medium text-[1.5rem]'}>{USDollar.format(Number(price))}</p>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          {/*  informations*/}
          <InformationsCard title={"Personal Information"}>
            <div className={'flex gap-4 items-center'}><Image src={contact} alt={'mail icon'}/>Ada Dennis</div>
            <div className={'flex gap-4 items-center'}><Image src={mail} alt={'mail icon'}/>ada@gmail.com</div>
            <div className={'flex gap-4 items-center'}><Image src={phone} alt={'mail icon'}/>09100000000</div>
          </InformationsCard>
          <InformationsCard title={"Delivery option"}>
            <div className={'flex gap-4 items-center'}><Image src={delivery} alt={'mail icon'}/>Pick up point</div>
            <div className={'flex gap-4 items-center justify-end'}>Ikeja, Lagos</div>
          </InformationsCard>

        </div>
        <div className={'flex-1'}>
          <div>
            <div className={'flex items-center justify-between pb-[12px]'}>
              <span className={'font-medium text-[1.9rem] text-[#2a2a2a]'}>Price summary</span>
            </div>
            <div
              className={" p-[1.6rem] bg-[#f9f9f9] border border-[#f9f9f9] rounded-[8px] font-medium text-[#2a2a2a] text-[1.5rem] flex flex-col gap-[20px]"}>
              <div className={'flex flex-col gap-[16px]'}>
                <div className={'grid grid-cols-4 lg:grid-cols-5'}>
                  <p className={'col-start-1 col-end-3 lg:col-end-4 text-[#555]'}>Total price</p>
                  <span className={'text-right'}>HTG</span>
                  <span
                    className={'text-right text-[#2a2a2a] font-medium'}>{new Intl.NumberFormat('en-US', {maximumSignificantDigits: 3}).format(
                    totalPrice,
                  )}.00</span>
                </div>
                <div className={'grid grid-cols-4 lg:grid-cols-5'}>
                  <p className={'col-start-1 col-end-3 lg:col-end-4 text-[#555]'}>Delivery fee</p>
                  <span className={'text-right'}>HTG</span>
                  <span className={'text-right text-[#2a2a2a] font-medium'}>0.00</span>
                </div>
                <div className={'grid grid-cols-4 lg:grid-cols-5'}>
                  <p className={'col-start-1 col-end-3 lg:col-end-4 text-[#555]'}>Discount</p>
                  <span className={'text-right'}>HTG</span>
                  <span className={'text-right text-[#2a2a2a] font-medium'}>0.00</span>
                </div>
              </div>
              {/*  hr*/}
              <div className={'h-[1px] bg-[#eaeaea] w-full'}></div>
              {/*  total*/}
              <div className={'grid grid-cols-4 lg:grid-cols-5'}>
                <p className={'col-start-1 col-end-3 lg:col-end-4 text-[#555]'}>Total</p>
                <span className={'text-right'}>HTG</span>
                <span
                  className={'text-right text-[#2a2a2a] font-medium'}>{new Intl.NumberFormat('en-US', {maximumSignificantDigits: 3}).format(
                  totalPrice,
                )}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer
        className={' py-8  bg-white shadow-2xl fixed w-full bottom-0 left-0'}>
        <div className={'flex px-8 lg:px-0 items-center justify-between max-w-[1000px] mx-auto'}>
          <Link href={'/cart'}
                className={'btn-cancel'}>Cancel</Link>
          <Link href={'/checkout?modal=true'} className={'btn-primary'}>Proceed</Link>
        </div>
      </footer>
      <div className={'flex opacity-0 items-center justify-between'}>
        <Link href={'/cart'}
              className={'btn-cancel'}>Cancel</Link>
        <Link href={'/checkout?modal=true'} className={'btn-primary'}>Proceed</Link>
      </div>
    </main>
  );
}

export default Checkout;
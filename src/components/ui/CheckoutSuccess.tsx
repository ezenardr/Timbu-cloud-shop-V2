import React from 'react';
import success from "@/assets/icons/success.svg"
import Image from "next/image";
import {Link} from "next-view-transitions";

function CheckoutSuccess() {
  return (
    <div
      className={'fixed top-0 left-0 w-full h-dvh bg-white z-[999999] flex items-center justify-center'}>
      <div className={'flex flex-col gap-4 items-center max-w-[353px]'}>
        <Image src={success} alt={'success icon payment'}/>
        <p className={'font-medium text-[1.9rem] text-[#2a2a2a]'}>Payment successful </p>
        <p className={'text-[1.5rem] text-[#707070] text-center'}>You have successfully placed an order. Details of your
          order has
          been sent to your email. </p>
        <Link href={'/products'} className={'btn-primary w-full text-center mt-8'}>Okay</Link>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
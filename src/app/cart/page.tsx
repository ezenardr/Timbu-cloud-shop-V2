'use client'
import React, {useContext} from 'react';
import Image from "next/image";
import {Link} from 'next-view-transitions'
import close from "@/assets/icons/close.svg"
import {CartContext} from "@/lib/CartProvider";

function Cart() {
  // @ts-ignore
  const {items, setItems} = useContext(CartContext)
  const totalPrice = items.reduce((total: any, item: any) => total + item.current_price[0].HTG[0] * item.quantity, 0);
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'HTG'
  });
  return (
    <main className={"px-4 lg:px-56  mt-20 mb-60 "}>
      {/*thumbnails*/}
      <div
        className={"flex items-center max-w-[850px] mx-auto divide-x-2 px-[1.6rem] py-[1.2rem] text-[1.2rem] text-[#9d9d9d]"}>
        <Link href={'/'} className={'pr-[1rem]'}>Home</Link>
        <Link href={'/cart'} className={'px-[1rem] font-medium text-primary text-[1.5rem]'}>My Cart</Link>
      </div>

      <section className={"mt-12 max-w-[850px] mx-auto"}>
        {/*cart list*/}
        {items.length === 0 &&
            <p className={'font-medium text-[1.9rem] text-[#2a2a2a] text-center'}>Empty Cart</p>}
        <ul className={"flex flex-col gap-[1.6rem]"}>
          {items.map((product: any, key: number) => {
            const price = product.current_price[0].HTG[0] * product.quantity
            const imageUrl = product.photos[0]?.url
            return (
              <li key={key}
                  className={"flex flex-col lg:flex-row lg:items-center border border-[#f9f9f9] py-8 px-2 lg:p-8 rounded-[8px] justify-between"}>
                <div className={"flex gap-4 items-center relative"}>
                  <div className={'p-10 bg-white rounded-[1rem]'}>
                    <Image width={80} height={100} src={`https://api.timbu.cloud/images/${imageUrl}`}
                           alt={"new black sneakers isolated"}
                           className={"hover:scale-110 transition-all "}/>
                  </div>
                  <div className={'flex flex-col gap-4'}>
                    <span className={"font-medium text-[1.9rem] text-[#2a2a2a]"}>{product.name}</span>
                    <div className={'flex lg:hidden items-center gap-[.8rem]'}>
                      <div
                        className={'flex gap-[.8rem] px-1 bg-[#f9f9f9] py-[4px]  text-[1.5rem] text-[#2a2a2a] rounded-[4px] w-[105px] items-center justify-between'}>
                        <button onClick={() => setItems((prev: any) => {
                          prev.map((p: any) => {
                            if (p.id === product.id) {
                              return p.quantity > 1 ? p.quantity = p.quantity - 1 : null
                            }
                          })
                          return [...prev]
                        })} className={'py-[4px] px-[8px] text-[1.8rem]'}
                        >-
                        </button>
                        <span className={'bg-[#0072C61F] py-[4px] px-[8px] rounded-[2px]'}>{product.quantity}</span>
                        <button onClick={() => setItems((prev: any) => {
                          prev.map((p: any) => {
                            if (p.id === product.id) {
                              return p.quantity = p.quantity + 1
                            }
                          })
                          return [...prev]
                        })} className={'py-[4px] text-[1.8rem] px-[8px] cursor-pointer'}
                        >+
                        </button>
                      </div>
                      <p className={'font-medium text-[1.5rem]'}>{USDollar.format(Number(price))}</p>
                      <Image onClick={() => setItems((prev: any) => {
                        return prev.filter((p: any) => p.id != product.id)
                      })} src={close} alt={"delete hidden button"} className={"absolute cursor-pointer top-6 right-6 "}
                             width={14}/>
                    </div>
                  </div>


                </div>
                <div className={'hidden lg:flex items-center gap-[1.6rem]'}>
                  <div
                    className={'flex gap-[1.6rem] bg-[#f9f9f9] py-[4px] px-[16px] text-[1.5rem] text-[#2a2a2a] rounded-[4px] w-[121px] items-center justify-between'}>
                    <button onClick={() => setItems((prev: any) => {
                      prev.map((p: any) => {
                        if (p.id === product.id) {
                          return p.quantity > 1 ? p.quantity = p.quantity - 1 : null
                        }
                      })
                      return [...prev]
                    })} className={'py-[4px] px-[8px]'}
                    >-
                    </button>
                    <span className={'bg-[#0072C61F] py-[4px] px-[8px] rounded-[2px]'}>{product.quantity}</span>
                    <button onClick={() => setItems((prev: any) => {
                      prev.map((p: any) => {
                        if (p.id === product.id) {
                          return p.quantity = p.quantity + 1
                        }
                      })
                      return [...prev]
                    })} className={'py-[4px] px-[8px] cursor-pointer'}
                    >+
                    </button>
                  </div>
                  <p className={'font-medium text-[1.9rem]'}>{USDollar.format(Number(price))}</p>
                  <Image className={'cursor-pointer'} onClick={() => setItems((prev: any) => {
                    return prev.filter((p: any) => p.id != product.id)
                  })} src={close} alt={"delete button"} width={12}/>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
      {items.length > 0 && <footer
          className={' py-8  bg-white shadow-2xl fixed w-full bottom-0 left-0'}>
          <div className={'flex px-8 lg:px-0 items-center justify-between max-w-[850px] mx-auto'}>
              <div className={'flex flex-col gap-4'}>
                  <span className={'text-[1.2rem] text-[#9d9d9d]'}>Total price</span>
                  <span
                      className={'font-medium text-[1.9rem] text-[#2a2a2a]'}>{USDollar.format(Number(totalPrice))}</span>
              </div>
              <Link href={'/checkout'} className={'btn-primary'}>Checkout</Link>
          </div>
      </footer>}
    </main>
  );
}

export default Cart;
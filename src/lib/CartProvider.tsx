'use client'
import React, {createContext, useState} from "react";
import {type ItemCart} from "@/app/cart/page";


export const CartContext = createContext<ItemCart[] | []>([])

export function CartProvider({children}: { children: React.ReactNode }) {
  const [items, setItems] = useState<ItemCart[] | []>([])
  // @ts-ignore
  return <CartContext.Provider value={{items, setItems}}>
    {children}
  </CartContext.Provider>

}

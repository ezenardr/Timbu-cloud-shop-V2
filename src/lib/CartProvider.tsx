'use client'
import React, {createContext, useState} from "react";

// @ts-ignore
export const CartContext = createContext()

export function CartProvider({children}: { children: React.ReactNode }) {
  const [items, setItems] = useState([])
  return <CartContext.Provider value={{items, setItems}}>
    {children}
  </CartContext.Provider>

}

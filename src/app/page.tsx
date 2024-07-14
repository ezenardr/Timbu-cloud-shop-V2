import searcIcon from "@/assets/icons/search-dark.svg"
import Image from "next/image";
import {Link} from 'next-view-transitions'
import banner from "@/assets/img/new-arrivals-banner.png"
import ProductCard from "@/components/ui/ProductCard";
import nike from "@/assets/logos/nike.svg"
import gucci from "@/assets/logos/gucci.svg"
import NewBalance from "@/assets/logos/new.svg"
import reebook from "@/assets/logos/reebok.svg"
import jordan from "@/assets/logos/jordan.svg"
import addidas from "@/assets/logos/adidas.svg"
import balenciaga from "@/assets/logos/balenciaga.svg"
import Footer from "@/components/Footer";
import React from "react";
import {getProducts} from "@/actions/products";
import {type ApiResponse} from "@/types/ApiResponse";
import {Item} from "@/types/Item";

export default async function Home() {
  const products: ApiResponse = await getProducts(16);
  return (
    <>
      {/*Hero section*/}
      <section className={"bg-[#F9F9F9]"}
      >
        <div
          className={"flex px-8 flex-col items-center justify-center text-center text-dark lg:max-w-[820px] lg:mx-auto pt-[5rem] pb-[6rem] gap-[3rem]"}>
          <h1 className={'text-[3.7rem] font-semibold'}>Set Up Your Game</h1>
          <p className={'text-[1.5rem] font-medium'}>Shop now for unbeatable comfort, top-notch designs, and top-tier
            performance from your favorite brands. Elevate
            your sneaker game with us!</p>
          {/*  search*/}
          <div
            className={'py-[1.2rem] px-[1.6rem] bg-[#ededed] border border-[#e4e4e4] rounded-[.8rem] flex gap-4 w-[330px] lg:w-[386px]'}>
            <Image src={searcIcon} alt={"Search icon dark hero"}/>
            <input type={'text'} placeholder={'Search brand name, category, male, female etc...'}
                   className={'text[#68707A] bg-transparent w-full text-[1.5rem] outline-none'}/>
          </div>
          <Link href={'/products'} className={'btn-primary'}>Shop Now</Link>
        </div>
      </section>

      {/*  Carousel*/}
      <div className={'flex flex-col pt-[6rem] items-center overflow-x-hidden'}>
        <div className=" inline-flex flex-nowrap overflow-x-hidden">
          <ul
            className="flex w-full gap-12 items-center justify-between [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li className={"flex flex-col items-center gap-4"}>
              <div className={'bg-[#f9f9f9] w-[100px] h-[100px] flex items-center justify-center rounded-full'}>
                <Image src={nike} alt="Nike Logo"
                />
              </div>
              <span className={"text-[18px] lg:text-[24px] font-medium"}>Nike</span>
            </li>
            <li className={"flex flex-col items-center gap-4"}>
              <div className={'bg-[#f9f9f9] w-[100px] h-[100px] flex items-center justify-center rounded-full'}>
                <Image src={gucci} alt="Gucci Logo"
                />
              </div>
              <span className={"text-[18px] lg:text-[24px] font-medium"}>Gucci</span>
            </li>
            <li className={"flex flex-col items-center gap-4"}>
              <div className={'bg-[#f9f9f9] w-[100px] h-[100px] flex items-center justify-center rounded-full'}>
                <Image src={NewBalance} alt="New Balance Logo"
                />
              </div>
              <span className={"text-[18px] lg:text-[24px] text-center font-medium"}>New Balance</span>
            </li>
            <li className={"flex flex-col items-center gap-4"}>
              <div className={'bg-[#f9f9f9] w-[100px] h-[100px] flex items-center justify-center rounded-full'}>
                <Image src={reebook} alt="Reebook Logo"
                />
              </div>
              <span className={"text-[18px] lg:text-[24px] font-medium"}>Reebook</span>
            </li>
            <li className={"flex flex-col items-center gap-4"}>
              <div className={'bg-[#f9f9f9] w-[100px] h-[100px] flex items-center justify-center rounded-full'}>
                <Image src={jordan} alt="Jordan Logo"
                />
              </div>
              <span className={"text-[18px] lg:text-[24px] font-medium"}>Jordan</span>
            </li>
            <li className={"flex flex-col items-center gap-4"}>
              <div className={'bg-[#f9f9f9] w-[100px] h-[100px] flex items-center justify-center rounded-full'}>
                <Image src={addidas} alt="Adidas Logo"
                />
              </div>
              <span className={"text-[18px] lg:text-[24px] font-medium"}>Adidas</span>
            </li>
            <li className={"flex flex-col items-center gap-4"}>
              <div className={'bg-[#f9f9f9] w-[100px] h-[100px] flex items-center justify-center rounded-full'}>
                <Image src={balenciaga} alt="Balenciaga Logo"
                />
              </div>
              <span className={"text-[18px] lg:text-[24px] font-medium"}>Balenciaga</span>
            </li>


          </ul>
          <ul
            className="flex w-full gap-12 items-center justify-between [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li className={"flex flex-col items-center gap-4"}>
              <div className={'bg-[#f9f9f9] w-[100px] h-[100px] flex items-center justify-center rounded-full'}>
                <Image src={nike} alt="Nike Logo"
                />
              </div>
              <span className={"text-[18px] lg:text-[24px] font-medium"}>Nike</span>
            </li>
            <li className={"flex flex-col items-center gap-4"}>
              <div className={'bg-[#f9f9f9] w-[100px] h-[100px] flex items-center justify-center rounded-full'}>
                <Image src={gucci} alt="Gucci Logo"
                />
              </div>
              <span className={"text-[18px] lg:text-[24px] font-medium"}>Gucci</span>
            </li>
            <li className={"flex flex-col items-center gap-4"}>
              <div className={'bg-[#f9f9f9] w-[100px] h-[100px] flex items-center justify-center rounded-full'}>
                <Image src={NewBalance} alt="New Balance Logo"
                />
              </div>
              <span className={"text-[18px] lg:text-[24px] text-center font-medium"}>New Balance</span>
            </li>
            <li className={"flex flex-col items-center gap-4"}>
              <div className={'bg-[#f9f9f9] w-[100px] h-[100px] flex items-center justify-center rounded-full'}>
                <Image src={reebook} alt="Reebook Logo"
                />
              </div>
              <span className={"text-[18px] lg:text-[24px] font-medium"}>Reebook</span>
            </li>
            <li className={"flex flex-col items-center gap-4"}>
              <div className={'bg-[#f9f9f9] w-[100px] h-[100px] flex items-center justify-center rounded-full'}>
                <Image src={jordan} alt="Jordan Logo"
                />
              </div>
              <span className={"text-[18px] lg:text-[24px] font-medium"}>Jordan</span>
            </li>
            <li className={"flex flex-col items-center gap-4"}>
              <div className={'bg-[#f9f9f9] w-[100px] h-[100px] flex items-center justify-center rounded-full'}>
                <Image src={addidas} alt="Adidas Logo"
                />
              </div>
              <span className={"text-[18px] lg:text-[24px] font-medium"}>Adidas</span>
            </li>
            <li className={"flex flex-col items-center gap-4"}>
              <div className={'bg-[#f9f9f9] w-[100px] h-[100px] flex items-center justify-center rounded-full'}>
                <Image src={balenciaga} alt="Balenciaga Logo"
                />
              </div>
              <span className={" text-[18px] lg:text-[24px] font-medium"}>Balenciaga</span>
            </li>


          </ul>
        </div>
      </div>

      {/*  New arrival*/}
      <section className={"pt-[9.6rem] px-8 lg:px-24 flex flex-col gap-10 items-center justify-center"}>
        <h2 className={"font-medium text-[3.7rem] text-black"}>New arrivals</h2>
        {/*list 1*/}
        <div className={"grid gap-[2rem] grid-cols-1 lg:grid-cols-4 items-center "}>
          <Image className={'lg:col-start-1 lg:col-end-3'} src={banner} alt={"Shoues banner new arrivals"}/>
          {/*card*/}
          {products.items.slice(0, 2).map((product: Item, key) => {
            const imageUrl = product.photos[0]?.url
            const price = product.current_price[0].HTG[0].toString()
            return (
              <ProductCard key={key} image={`https://api.timbu.cloud/images/${imageUrl}`}
                           subtitle={"Iconic Casual Brands"} title={product.name}
                           rating={"4.5 (100 sold)"} price={price}
                           product={product}
                           link={`/products/${product.id}?org_id=${product.organization_id}`}/>

            )
          })}

        </div>
        <div className={"grid w-full gap-[2rem] min-h-[400px] grid-cols-1 lg:grid-cols-3 items-center "}>
          {products.items.slice(3, 6).map((product: Item, key) => {
            const imageUrl = product.photos[0]?.url
            const price = product.current_price[0].HTG[0].toString()
            return (
              <ProductCard key={key} image={`https://api.timbu.cloud/images/${imageUrl}`}
                           subtitle={"Iconic Casual Brands"} title={product.name}
                           rating={"4.5 (100 sold)"} price={price}
                           product={product}
                           link={`/products/${product.id}?org_id=${product.organization_id}`}/>

            )
          })}
        </div>
      </section>

      {/*  Special Offer*/}
      <section className={"pt-[9.6rem] px-8 lg:px-24 flex flex-col gap-10 items-center justify-center"}>
        <h2 className={"font-medium text-[3.7rem] text-black"}>Our Special Offers</h2>
        <div className={"grid w-full gap-[2rem] min-h-[400px] grid-cols-1 lg:grid-cols-3 items-center "}>
          {products.items.slice(6, 9).map((product: Item, key) => {
            const imageUrl = product.photos[0]?.url
            const price = product.current_price[0].HTG[0].toString()
            return (
              <ProductCard key={key} image={`https://api.timbu.cloud/images/${imageUrl}`}
                           subtitle={"Iconic Casual Brands"} title={product.name}
                           rating={"4.5 (100 sold)"} price={price}
                           product={product}
                           link={`/products/${product.id}?org_id=${product.organization_id}`}/>

            )
          })}
        </div>
      </section>

      {/*  Featured Sneakers*/}
      <section className={"pt-[9.6rem] px-8 lg:px-24 flex flex-col gap-10 items-center justify-center"}>
        <h2 className={"font-medium text-[3.7rem] text-black"}>Featured Sneakers</h2>
        <div className={"grid w-full gap-[2rem] grid-cols-1 lg:grid-cols-3 items-center "}>
          {products.items.slice(9, 15).map((product: Item, key) => {
            const imageUrl = product.photos[0]?.url
            const price = product.current_price[0].HTG[0].toString()
            return (
              <ProductCard key={key} image={`https://api.timbu.cloud/images/${imageUrl}`}
                           subtitle={"Iconic Casual Brands"} title={product.name}
                           rating={"4.5 (100 sold)"} price={price}
                           product={product}
                           link={`/products/${product.id}?org_id=${product.organization_id}`}/>

            )
          })}
        </div>
        <Link href={'/products'} className={'btn-primary'}>View all sneakers</Link>
      </section>
      <Footer/>
    </>
  );
}

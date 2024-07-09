import searcIcon from "@/assets/icons/search-dark.svg"
import Image from "next/image";
import {Link} from 'next-view-transitions'
import banner from "@/assets/img/new-arrivals-banner.png"
import pairTrainnerBlue from "@/assets/img/pair-trainers-blue.png"
import blackFashion from "@/assets/img/black-fashion-gumshoes.png"
import airJordan from "@/assets/img/air-jordan-running-sneakers.png"
import luxuryFashion from "@/assets/img/Luxury Fashion Brands.png"
import colorfulUnisex from "@/assets/img/colorful-slip-unisex-streetwear-sneakers-fashion.png"
import whiteSneakers from "@/assets/img/white-sneaker-athletic.png"
import LuxuryAdidas from "@/assets/img/luxury-adidas.png"
import GreenAirJordan from "@/assets/img/green-air-jordan-running.png"
import greenJordan from "@/assets/img/green-air-jordan-running.png"
import RSX from "@/assets/img/rs-x-women-sneakers.png"
import brownJordan from "@/assets/img/brown-air-jordan.png"
import newBalance from "@/assets/img/new-balance-57.png"
import newBalanceV2 from "@/assets/img/v2-new-balance.png"
import converse from "@/assets/img/converse-black.png"
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

export default function Home() {
  const featuredSneakers = [
    {
      image: RSX,
      subtitle: "Iconic Casual Brands",
      title: "RS-X Women sneaker",
      rating: "4.5 (100 sold)",
      price: "37,000.00"
    },
    {
      image: brownJordan,
      subtitle: "Iconic Casual Brands",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "37,000.00"
    },
    {
      image: newBalance,
      subtitle: "Luxury Fashion Brands",
      title: "New Balance 574T",
      rating: "4.5 (100 sold)",
      price: "52,000.00"
    },
    {
      image: greenJordan,
      subtitle: "Athletic/Sportswear",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "32,500.00"
    },
    {
      image: newBalanceV2,
      subtitle: "Iconic Casual Brands",
      title: "New Balance 574 V2",
      rating: "4.5 (100 sold)",
      price: "37,000.00"
    },
    {
      image: converse,
      subtitle: "Iconic Casual Brands",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "37,000.00"
    }
  ];
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
          <ProductCard image={pairTrainnerBlue} subtitle={"Iconic Casual Brands"} title={"Ego Vessel"}
                       rating={"4.5 (100 sold)"} price={"37, 000.00"} liked={false}/>
          <ProductCard image={blackFashion}
                       subtitle={"Luxury Fashion Brands"}
                       title={"Air Jordan running sneaker"}
                       rating={"4.5 (100 sold)"}
                       price={"52,000.00"} liked={true}/>

        </div>
        <div className={"grid w-full gap-[2rem] min-h-[400px] grid-cols-1 lg:grid-cols-3 items-center "}>
          <ProductCard image={airJordan}
                       subtitle={"Athletic/Sportswear"}
                       title={"Air Jordan running sneaker"}
                       rating={"4.5 (100 sold)"}
                       price={"32,000.00"} liked={false}/>
          <ProductCard image={luxuryFashion}
                       subtitle={"Luxury Fashion Brands"}
                       title={"Air Jordan running sneaker"}
                       rating={"4.5 (100 sold)"}
                       price={"52,000.00"} liked={false}/>
          <ProductCard image={colorfulUnisex}
                       subtitle={"Iconic Casual Brands"}
                       title={"Air Jordan running sneaker"}
                       rating={"4.5 (100 sold)"}
                       price={"37,000.00"} liked={false}/>
        </div>
      </section>

      {/*  Special Offer*/}
      <section className={"pt-[9.6rem] px-8 lg:px-24 flex flex-col gap-10 items-center justify-center"}>
        <h2 className={"font-medium text-[3.7rem] text-black"}>Our Special Offers</h2>
        <div className={"grid w-full gap-[2rem] min-h-[400px] grid-cols-1 lg:grid-cols-3 items-center "}>
          <ProductCard image={whiteSneakers}
                       subtitle={"Athletic/Sportswear"}
                       title={"Air Jordan running sneaker"}
                       rating={"4.5 (100 sold)"}
                       discount={"32,500.00"}
                       price={"28,000.00"}/>

          <ProductCard image={LuxuryAdidas}
                       subtitle={"Luxury Fashion Brands"}
                       title={"Air Jordan running sneaker"}
                       rating={"4.5 (100 sold)"}
                       price={"48,500.00"}
                       discount={"52,000.00"}
                       liked={false}/>
          <ProductCard image={GreenAirJordan}
                       subtitle={"Athletic/Sportswear"}
                       title={"Air Jordan running sneaker"}
                       rating={"4.5 (100 sold)"}
                       price={"28,000.00"} discount={"32,500.00"} liked={false}/>
        </div>
      </section>

      {/*  Featured Sneakers*/}
      <section className={"pt-[9.6rem] px-8 lg:px-24 flex flex-col gap-10 items-center justify-center"}>
        <h2 className={"font-medium text-[3.7rem] text-black"}>Featured Sneakers</h2>
        <div className={"grid w-full gap-[2rem] grid-cols-1 lg:grid-cols-3 items-center "}>
          {featuredSneakers.map(({image, rating, subtitle, price, title}) => (
            <ProductCard key={title} image={image}
                         subtitle={subtitle}
                         title={title}
                         rating={rating}
                         price={price}/>
          ))}
        </div>
        <Link href={'/products'} className={'btn-primary'}>View all sneakers</Link>
      </section>
      <Footer/>
    </>
  );
}

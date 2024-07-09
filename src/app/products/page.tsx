import React from 'react';
import Image from "next/image";
import searcIcon from "@/assets/icons/search-dark.svg";
import ProductCard from "@/components/ui/ProductCard";
import airJordanRunning from "@/assets/img/air-jordan-running-sneakers.png";
import trainerBlue from "@/assets/img/pair-trainers-blue.png"
import blackFashion from "@/assets/img/black-fashion-gumshoes.png"
import luxuryAdidas from "@/assets/img/luxury-adidas.png"
import colorfulSlip from "@/assets/img/colorful-slip-unisex-streetwear-sneakers-fashion.png"
import womanWhite from "@/assets/img/woman-white-background-model-shoe.png"
import sportRunning from "@/assets/img/sport-running-shoes.png"
import luxuryFashion from "@/assets/img/Luxury Fashion Brands.png"
import newBlackSneak from "@/assets/img/new-black-sneakers-isolated-white-background.png"
import whiteSneak from "@/assets/img/white-sneaker-athletic.png"
import converseBlack from "@/assets/img/converse-black.png"
import pristine from "@/assets/img/Pristine_White_Sneakers_on_Pink_Background-removebg-preview.png"
import brownAirJ from "@/assets/img/brown-air-jordan.png"
import mariaFernanda from "@/assets/img/maria-fernanda-pissioli-Ci-LAT3aK8o-unsplash-removebg-preview.png"
import fila from "@/assets/img/fila.png"
import greenJordan from "@/assets/img/green-jordan-sneakers.png"
import linda from "@/assets/img/v2-new-balance.png"
import redConverse from "@/assets/img/productImageContainer.png"
import mana from "@/assets/img/mana-akbarzadegan-kLnlaZJ4SMA-unsplash-removebg-preview.png"
import greenAirJordan from "@/assets/img/green-air-jordan-running.png"
import newPairWhite from "@/assets/img/new-pair-white-sneakers-isolated-white.png"
import {Link} from 'next-view-transitions'
import Footer from "@/components/Footer";

function Page() {
  const products = [
    {
      image: trainerBlue,
      subtitle: "Iconic Casual Brands",
      title: "Ego Vessel",
      rating: "4.5 (100 sold)",
      price: "37,000.00",
    }, {
      image: blackFashion,
      subtitle: "Luxury Fashion Brands",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "52,000.00",
      liked: true
    }, {
      image: luxuryAdidas,
      subtitle: "Luxury Fashion Brands",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "48,500.00",
      discount: "52,000.00"
    },
    {
      image: colorfulSlip,
      subtitle: "Iconic Casual Brands",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "37,000.00"
    }, {
      image: womanWhite,
      subtitle: "Iconic Casual Brands",
      title: "Ego",
      rating: "4.5 (100 sold)",
      price: "32,500.00"
    }, {
      image: sportRunning,
      subtitle: "Iconic Casual Brands",
      title: "Ego Feminine",
      rating: "4.5 (100 sold)",
      price: "52,000.00"
    }, {
      image: newPairWhite,
      subtitle: "Luxury Fashion Brands",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "52,000.00"
    }, {
      image: luxuryFashion,
      subtitle: "Luxury Fashion Brands",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "52,000.00"
    }, {
      image: newBlackSneak,
      subtitle: "Iconic Casual Brands",
      title: "Ego Raid",
      rating: "4.5 (100 sold)",
      price: "52,000.00"
    }, {
      image: whiteSneak,
      subtitle: "Athletic/Sportswear",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "28,000.00",
      discount: "32,500.00"
    }, {
      image: converseBlack,
      subtitle: "Iconic Casual Brands",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "37,000.00",
    }, {
      image: pristine,
      subtitle: "Luxury Fashion Brands",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "52,000.00",
    }, {
      image: brownAirJ,
      subtitle: "Iconic Casual Brands",
      title: "Chuck Tailor Classic",
      rating: "4.5 (100 sold)",
      price: "37,000.00",
    }, {
      image: mariaFernanda,
      subtitle: "Luxury Fashion Brands",
      title: "Chuck Tailor Classic",
      rating: "4.5 (100 sold)",
      price: "52,000.00",
    }, {
      image: fila,
      subtitle: "Athletic/Sportswear",
      title: "Fila Windshift 15",
      rating: "4.5 (100 sold)",
      price: "32,500.00",
    }, {
      image: greenJordan,
      subtitle: "Athletic/Sportswear",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "32,500.00",
    }, {
      image: linda,
      subtitle: "Iconic Casual Brands",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "37,000.00",
    }, {
      image: redConverse,
      subtitle: "Iconic Casual Brands",
      title: "Chuck 70 Vintage",
      rating: "4.5 (100 sold)",
      price: "37,000.00",
    }, {
      image: mana,
      subtitle: "Luxury Fashion Brands",
      title: "Puma Running Sneaker",
      rating: "4.5 (100 sold)",
      price: "52,000.00",
    }, {
      image: greenAirJordan,
      subtitle: "Athletic/Sportswear",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "28,000.00",
      discount: "32,500.00",
    }, {
      image: airJordanRunning,
      subtitle: "Athletic/Sportswear",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "32,500.00",
    },
  ]
  return (
    <>
      <main className={'px-8 lg:px-24 mt-20 flex flex-col items-center gap-12 overflow-x-hidden'}>
        {/*  topbar*/}
        <div className={'flex items-center justify-between w-full'}>
          {/*actions*/}
          <div className={'flex gap-[1.6rem]'}>
            <button className={'bg-[#EAEAEA] py-[1.2rem] px-[1.6rem] rounded-[8px] text-[1.5rem] text-[#2a2a2a]'}>Filter
            </button>
            <button className={'bg-[#EAEAEA] py-[1.2rem] px-[1.6rem] rounded-[8px] text-[1.5rem] text-[#2a2a2a]'}>Sort
            </button>
          </div>
          {/*  end actions*/}
          <ul className={' hidden text-[1.5rem] font-medium text-[#555555] lg:flex border-b-[1px]'}>
            <li className={'py-[1.2rem] px-[1.6rem] text-[#2a2a2a] border-b-4 border-[#2a2a2a]'}>All Products</li>
            <li className={'py-[1.2rem] px-[1.6rem]'}>Iconic Casual Brands</li>
            <li className={'py-[1.2rem] px-[1.6rem]'}>Athletic/Sportswear Brands</li>
            <li className={'py-[1.2rem] px-[1.6rem]'}>Luxury Fashion Brands</li>
          </ul>
          <div
            className={'py-[1.2rem] px-[1.6rem] bg-[#ededed] border border-[#e4e4e4] rounded-[.8rem] flex gap-4 w-[208px] lg:w-[272px]'}>
            <Image src={searcIcon} alt={"Search icon dark hero"}/>
            <input type={'text'} placeholder={'Search'}
                   className={'text[#68707A] bg-transparent w-full text-[1.5rem] outline-none'}/>
          </div>
        </div>
        <div className={'overflow-x-scroll scrollbar-hide w-full lg:hidden'}>
          <ul
            className={' flex text-nowrap flex-nowrap px-8 text-[1.5rem] font-medium text-[#555555]  border-b-[1px]'}>
            <li className={'py-[1.2rem] px-[1.6rem] text-[#2a2a2a] border-b-4 border-[#2a2a2a]'}>All Products</li>
            <li className={'py-[1.2rem] px-[1.6rem]'}>Iconic Casual Brands</li>
            <li className={'py-[1.2rem] px-[1.6rem]'}>Athletic/Sportswear Brands</li>
            <li className={'py-[1.2rem] px-[1.6rem]'}>Luxury Fashion Brands</li>
          </ul>
        </div>
        {/*  end topbar*/}

        {/*  products*/}
        <ul className={"grid w-full gap-[2rem] min-h-[400px] grid-cols-1 lg:grid-cols-3 items-center "}>
          {products.map(({subtitle, rating, image, price, title, liked, discount}, key) => (
            <li key={key}>
              <ProductCard image={image}
                           subtitle={subtitle}
                           title={title}
                           rating={rating}
                           price={price} liked={liked} discount={discount}/>
            </li>
          ))}

        </ul>
        <Link href={'/products'} className={'btn-primary'}>View more</Link>
      </main>
      <Footer/>
    </>
  );
}

export default Page;
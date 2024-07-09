import React from 'react';
import Image from "next/image";
import pairTrainerBlue from "@/assets/img/pair-trainers-blue.png"
import pair1 from "@/assets/img/pair-trainers (1).png"
import pair2 from "@/assets/img/pair-trainers (2).png"
import pair3 from "@/assets/img/pair-trainers (3) 1.png"
import wishActive from "@/assets/icons/heart-full.svg";
import star from "@/assets/icons/half-star-yellow.svg";
import check from "@/assets/icons/check.svg";
import {Link} from 'next-view-transitions'
import ProductCard from "@/components/ui/ProductCard";
import newBlakSneak from "@/assets/img/new-black-sneakers-isolated-white-background.png"
import sportRunning from "@/assets/img/sport-running-shoes.png"
import airJordanRunning from "@/assets/img/air-jordan-running-sneakers.png"
import {Carousel} from "flowbite-react";
import luxuryAdidas from "@/assets/img/luxury-adidas.png";
import Footer from "@/components/Footer";

function Product({searchParams}: { searchParams: { [key: string]: string | string[] | undefined } }) {
  let quantity = searchParams.quantity || 2
  const moreProduct = [
    {
      image: newBlakSneak,
      subtitle: "Iconic Casual Brands",
      title: "Ego Raid",
      rating: "4.5 (100 sold)",
      price: "52,000.00",
    }, {
      image: sportRunning,
      subtitle: "Iconic Casual Brands",
      title: "Ego Feminine",
      rating: "4.5 (100 sold)",
      price: "52,000.00",
    }, {
      image: airJordanRunning,
      subtitle: "Athletic/Sportswear",
      title: "Ego Runner",
      rating: "4.5 (100 sold)",
      price: "32,500.00",
    }, {
      image: luxuryAdidas,
      subtitle: "Luxury Fashion Brands",
      title: "Air Jordan running sneaker",
      rating: "4.5 (100 sold)",
      price: "48,500.00",
    },
  ]
  return (
    <>
      <main className={"px-8 lg:px-24 mt-20 flex flex-col gap-12"}>
        {/*  thumbnails*/}
        <div className={"hidden lg:flex items-center divide-x-2  py-[1.2rem] text-[1.2rem] text-[#9d9d9d]"}>
          <Link href={'/products'} className={'px-[1rem]'}>All Products</Link>
          <Link href={'/products'} className={'px-[1rem]'}>Iconic Casual Brand</Link>
          <Link href={'/products/id'} className={'pl-[1rem] font-medium text-primary text-[1.5rem]'}>Ego Vessel</Link>
        </div>
        <div className={"flex flex-col lg:flex-row gap-10"}>
          {/*carousel*/}
          <div className="lg:hidden h-[300px]">
            <Carousel leftControl="" rightControl="">
              <Image src={pairTrainerBlue} alt="Ego Vessel trainer blue 8"/>
              <Image src={pair1} alt="Ego Vessel trainer blue 5"/>
              <Image src={pair2} alt="Ego Vessel trainer blue 6"/>
              <Image src={pair3} alt="Ego Vessel trainer blue 7"/>
            </Carousel>
          </div>
          {/*  products images*/}
          <div className={'flex-1 hidden lg:grid grid-cols-3 gap-8'}>
            <div
              className={"bg-[#EAEAEA] col-start-1 col-end-4 p-12 flex items-center justify-center h-[300px] rounded-[1rem] "}>
              <Image width={240} className={'hover:scale-110 transition-all'} src={pairTrainerBlue}
                     alt={"Ego Vessel trainer blue 1"}/>
            </div>
            <Image
              className={"bg-[#eaeaea] rounded-[1rem] p-10 hover:scale-110 transition-all h-[180px] w-[180px]"}
              src={pair1}
              alt={"Ego Vessel trainer blue 2"}/>
            <Image width={186}
                   className={"bg-[#eaeaea] rounded-[1rem] p-10 hover:scale-110 transition-all h-[180px] w-[180px]"}
                   src={pair2}
                   alt={"Ego Vessel trainer blue 3"}/>
            <Image className={"bg-[#eaeaea] rounded-[1rem] p-10 hover:scale-110 transition-all h-[180px] w-[180px]"}
                   src={pair3}
                   alt={"Ego Vessel trainer blue 4"}/>
          </div>
          {/*text*/}
          <div className={'flex-1 flex flex-col gap-4'}>
            <span className={'text-[1.5rem] text-[#2a2a2a]'}>Iconic Causal Brands</span>
            <div className={'flex flex-col relative pb-2 justify-between'}>
              <h1 className={'font-medium text-[3.7rem] text-[#2a2a2a]'}>Ego Vessel</h1>
              <Image src={wishActive} alt={"Added to wishlist"}
                     className={`bg-[#D42620] absolute top-0 right-0  w-[3rem] h-[3rem] p-[6px] rounded-full cursor-pointer hover:bg-[#D42620] transition-all`}/>
              <span className={'font-medium text-[1.9rem]'}># 37,000.00</span>
            </div>
            <span className={'text-[1.2rem] text-[#555555] font-medium flex gap-2'}>100 sold
            <Image src={star}
                   alt={"half stat rating"}/> 4.5 (32 reviews)
          </span>
            {/*description*/}
            <div>
              <span className={'font-medium text-[#2a2a2a] text-[1.9rem]'}>Description</span>
              <p className={'text-[1.5rem] text-[#555555] text-justify'}>The Ego Vessel is the perfect addition to your
                casual
                wardrobe. Pair them with jeans, joggers, or even a dress for an effortlessly cool look that&apos;s sure
                to
                make
                a statement. Whether you&apos;re running errands or hitting the town, these versatile sneakers will keep
                you
                feeling and looking your best.</p>
            </div>
            {/*  size*/}
            <div>
              <span className={"font-medium text-[#2a2a2a] text-[1.9rem]"}>Size</span>
              <div className={'flex gap-2'}>
              <span
                className={'rounded-[4px] text-[1.5rem] cursor-pointer hover:bg-primary hover:text-white transition-all text-[#555555] bg-[#f9f9f9] p-[4px]'}>32</span>
                <span
                  className={'rounded-[4px] text-[1.5rem] hover:text-white transition-all cursor-pointer hover:bg-primary text-[#555555] bg-[#f9f9f9] p-[4px]'}>35</span>
                <span
                  className={'rounded-[4px] text-[1.5rem] hover:text-white transition-all cursor-pointer hover:bg-primary text-[#555555] bg-[#f9f9f9] p-[4px]'}>38</span>
                <span
                  className={'rounded-[4px] text-[1.5rem] hover:text-white transition-all cursor-pointer hover:bg-primary text-white bg-primary p-[4px]'}>39</span>
                <span
                  className={'rounded-[4px] text-[1.5rem] hover:text-white transition-all cursor-pointer hover:bg-primary text-[#555555] bg-[#f9f9f9] p-[4px]'}>40</span>
                <span
                  className={'rounded-[4px] text-[1.5rem] hover:text-white transition-all cursor-pointer hover:bg-primary text-[#555555] bg-[#f9f9f9] p-[4px]'}>42</span>
                <span
                  className={'rounded-[4px] text-[1.5rem] hover:text-white transition-all cursor-pointer hover:bg-primary text-[#555555] bg-[#f9f9f9] p-[4px]'}>45</span>
              </div>
            </div>
            {/*  Colors*/}
            <div>
              <span className={"font-medium text-[#2a2a2a] text-[1.9rem]"}>Colors</span>
              <div className={'flex gap-2'}>
              <span
                className={'rounded-[4px] bg-[#FFA500] cursor-pointer hover:scale-105 transition-all w-[24px] h-[24px]'}></span>
                <span
                  className={'rounded-[4px] bg-[#9747FF] cursor-pointer hover:scale-105 transition-all w-[24px] h-[24px]'}></span>
                <span
                  className={'rounded-[4px] bg-[#09C53B] cursor-pointer hover:scale-105 transition-all w-[24px] h-[24px]'}></span>
                <span
                  className={'rounded-[4px] bg-[#0266B8] cursor-pointer hover:scale-105 transition-all w-[24px] h-[24px] flex items-center justify-center'}><Image
                  src={check} alt={'checkmark'}/></span>
                <span
                  className={'rounded-[4px] bg-[#FFCD00] cursor-pointer hover:scale-105 transition-all w-[24px] h-[24px]'}></span>
                <span
                  className={'rounded-[4px] bg-[#EC064F] cursor-pointer hover:scale-105 transition-all w-[24px] h-[24px]'}></span>
                <span
                  className={'rounded-[4px] bg-[#141B34] cursor-pointer hover:scale-105 transition-all w-[24px] h-[24px]'}>
              </span>
              </div>
            </div>
            {/*  Quantity*/}
            <div>
              <span className={"font-medium text-[#2a2a2a] text-[1.9rem]"}>Quantity</span>
              <div
                className={'flex gap-[1.6rem] bg-[#f9f9f9] py-[4px] px-[16px] text-[1.5rem] text-[#2a2a2a] rounded-[4px] w-[121px] items-center justify-between'}>
                <Link href={`/products/id?quantity=${Number(quantity) - 1}`} className={'py-[4px] px-[8px]'}
                      scroll={false}>-</Link>
                <span className={'bg-[#0072C61F] py-[4px] px-[8px] rounded-[2px]'}>{quantity}</span>
                <Link href={`/products/id?quantity=${(1 + Number(quantity))}`} className={'py-[4px] px-[8px]'}
                      scroll={false}>+</Link>
              </div>
            </div>
            {/*  prices*/}
            <div className={'flex flex-col lg:flex-row gap-6 lg:gap-0 lg:items-center justify-between'}>
              <div className={'flex flex-col gap-6 justify-between '}>
                <span className={"text-[12px] text-[#9d9d9d]"}>Total Price</span>
                <p className={'font-medium text-[1.9rem] text-[#2a2a2a]'}># 37,000.00</p>
              </div>
              <div className={'flex gap-[1.6rem] items-center'}>
                <Link href={'/cart'} className={'btn-secondary'}>Add to Cart</Link>
                <Link href={'/checkout'} className={'btn-primary'}>Checkout</Link>
              </div>
            </div>
          </div>
        </div>
        <section className={'flex flex-col lg:items-center gap-10 pt-[9.6rem] pb-8'}>
          <h2 className={'text-[3.7rem] font-medium text-black text-center'}>More From Ego</h2>
          <ul className={'flex flex-col lg:flex-row gap-8'}>
            {moreProduct.map(({image, rating, subtitle, title, price}, id) => (
              <ProductCard key={id} image={image}
                           subtitle={subtitle}
                           title={title}
                           rating={rating}
                           price={price}/>

            ))}
          </ul>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Product;
'use client'
import React from 'react';
import {getProducts} from "@/actions/products";
import {useQuery} from "@tanstack/react-query";
import ProductCard from "@/components/ui/ProductCard";
import {Link} from "next-view-transitions";
import {type ApiResponse} from "@/types/ApiResponse";

function ProductsList({page}: { page: number }) {
  const {data: products} = useQuery<ApiResponse>({
    queryKey: ['products'],
    queryFn: () => getProducts(12, page)
  })
  return (
    <>
      <ul className={"grid w-full gap-[2rem] min-h-[400px] grid-cols-1 lg:grid-cols-3 items-center "}>
        {products && products.items.map((product: any, key: number) => {
          const price = product.current_price[0].HTG[0]
          const imageUrl = product.photos[0]?.url
          return (
            <li key={key}>
              <ProductCard
                title={product.name}
                price={price}
                link={`/products/${product.id}?org_id=${product.organization_id}`}
                product={product}
                image={`https://api.timbu.cloud/images/${imageUrl}`}/>
            </li>
          )
        })}
      </ul>

      <div className={'flex gap-12'}>
        {products && products.previous_page &&
            <Link href={products.previous_page} className={'btn-primary'}>Previous</Link>}
        {products && products.next_page && <Link href={products.next_page} className={'btn-primary'}>Next</Link>}
      </div>
    </>
  );
}

export default ProductsList;
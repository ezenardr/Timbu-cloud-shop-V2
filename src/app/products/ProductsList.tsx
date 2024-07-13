'use client'
import React from 'react';
import {getProducts} from "@/actions/products";
import {useQuery} from "@tanstack/react-query";
import ProductCard from "@/components/ui/ProductCard";

function ProductsList() {
  const {data: products} = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts()
  })
  return (
    <ul className={"grid w-full gap-[2rem] min-h-[400px] grid-cols-1 lg:grid-cols-3 items-center "}>
      {products.items.map((product: any, key: number) => {
        const price = product.current_price[0].HTG[0]
        // const category = product.categories[0]?.name ?? 'test'
        const imageUrl = product.photos[0]?.url
        return (
          <li key={key}>
            <ProductCard
              // subtitle={category}
              title={product.name}
              price={price}
              link={`/products/${product.id}?org_id=${product.organization_id}`}
              product={product}
              image={`https://api.timbu.cloud/images/${imageUrl}`}/>
          </li>
        )
      })}
    </ul>
  );
}

export default ProductsList;
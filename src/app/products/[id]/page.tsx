import React from 'react';
import ProductCard from "@/components/ui/ProductCard";
import Footer from "@/components/Footer";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getProductById, getProducts} from "@/actions/products";
import ProductComponent from "./ProductComponent";

async function Product({searchParams, params}: { searchParams: { [key: string]: string }; params: { id: string } }) {
  const product_id = params.id;
  const org_id = searchParams.org_id;
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ["product"],
    queryFn: () => getProductById(product_id, org_id)
  })
  const products = await getProducts(4)
  return (
    <>
      <main className={"px-8 lg:px-24 mt-20 flex flex-col gap-12"}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductComponent product_id={product_id} org_id={org_id}/>
        </HydrationBoundary>
        <section className={'flex flex-col lg:items-center gap-10 pt-[9.6rem] pb-8'}>
          <h2 className={'text-[3.7rem] font-medium text-black text-center'}>More From Ego</h2>
          <ul className={'flex flex-col lg:flex-row gap-8'}>
            {products.items.map((product:any, key:number) => {
              const price = product.current_price[0].HTG[0]
              const category = product.categories[0]?.name
              const imageUrl = product.photos[0]?.url
              return (
                <li key={key}>
                  <ProductCard
                    subtitle={category}
                    title={product.name}
                    price={price}
                    link={`/products/${product.id}?org_id=${product.organization_id}`}
                    image={`https://api.timbu.cloud/images/${imageUrl}`} product={product}/>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Product;
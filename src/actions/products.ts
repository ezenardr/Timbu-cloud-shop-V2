'use server'

const apiURL = process.env.NEXT_PUBLIC_API_URL ?? ''
const orgID = process.env.NEXT_PUBLIC_ORG_ID ?? ''
const appID = process.env.NEXT_PUBLIC_APP_ID ?? ''
const apiKEY = process.env.NEXT_PUBLIC_API_KEY ?? ''

export async function getProducts(size = 12) {
  try {
    const response = await fetch(`${apiURL}/products?organization_id=${orgID}&Appid=${appID}&Apikey=${apiKEY}&size=${size}`)
    // const json = await response.json()
    // console.log(json)
    return await response.json()
  } catch (e) {
    console.log(e)
  }
}

export async function getProductById(productId: string, orgId: string) {
  try {
    const response = await fetch(`${apiURL}/products/${productId}?organization_id=${orgId}&Appid=${appID}&Apikey=${apiKEY}&currency_code=HTG`)
    return await response.json()
  } catch (e) {
    console.log(e)
  }
}
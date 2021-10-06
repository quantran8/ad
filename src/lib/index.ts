export interface Form_Data {
    name :string,
    slug:string,
    price :number| undefined,
    weight:number| undefined,
    color:string,
    frame:string,
    thumbnail:string,
    imgs:string[]
}
export interface CartItem {
    id: string
    name: string
    thumbnail: string
    slug: string
    amount: number
    price: number
    color: string
    totalPay:number
}
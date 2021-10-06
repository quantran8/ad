export interface Product {
    _id: string;
    name: string;
    thumbnail: string;
    slug: string;
    price: number;
    info:{
        img:string[]
        color:string[]
        weight: string,
        frame:string
    }
}
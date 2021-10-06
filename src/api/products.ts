import axiosClient from "api";
import { Product } from 'api/lib';
import { Form_Data } from "lib";
export const getProducts = (slug:string| undefined):Promise<Array<Product>> => {
    const url = `/bikes?slug=${slug}`
    return axiosClient.get(url);
}
export const getProductDetail = (id:string| undefined):Promise<Product> => {
   const url = `/bikes/${id}`;
   return axiosClient.get(url);
}
export const uploadData = async (data: Form_Data) => {
    const url = '/upload';
    return axiosClient.post(url, data);
 
}
export const uploadImg = async <T>(files:T):Promise<Array<string>> => {
    const url = '/multi_img';
    return axiosClient.post(url, files);
}
export const uploadSingleImg = async <T>(file:T):Promise<string> => {
    const url = '/single_img';
    return axiosClient.post(url, file);
}
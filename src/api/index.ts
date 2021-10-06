import axios, { AxiosError, AxiosResponse } from "axios";
 const axiosClient = axios.create({
     baseURL: 'http://localhost:8000',
     headers: {
         'Content-Type': 'application/json'
     }
 })
 axiosClient.interceptors.response.use((res:AxiosResponse) => {
   return res.data;
 },(error:AxiosError) => {
     return Promise.reject(error);
 })

 export default axiosClient;
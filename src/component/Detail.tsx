import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Product } from 'api/lib';
import { getProductDetail } from 'api/products';
import { useAppDispatch } from 'app/hooks';
import { Next, Prev } from 'custom';
import { addToCart } from 'features/cart/cartSlice';
import { CartItem } from 'lib';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './index.scss';
interface Props {
    
}
interface ProductId{
    id?:string
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev/>,
  };
const Detail = (props: Props) => {
    const dispatch = useAppDispatch();
    const {id}:ProductId = useParams();
    const [product,setProduct] = useState<Product>();
    const [amount,setAmout] = useState(1);
    const [color,setColor] = useState('');
    const handleAddToCart = () => {
       if(product){
        const item:CartItem = {
            id:product._id,
            name: product.name,
            price: product.price,
            thumbnail:product.thumbnail,
            slug: product.slug,
            amount:amount,
            color:color === ''?product.info.color[0]:color,
            totalPay:product.price*amount
        }
        dispatch(addToCart(item))       
       }
    }
    const handleDecrease = () => {
        if(amount>1)
        setAmout(amount-1);
    }
    const handleIncrease = () => {
        setAmout(amount+1);
    }
    const handleChangeSelect = (e: SelectChangeEvent) => {
        setColor(e.target.value);
    }
    useEffect(() => {
        const getitem = async () => {
            const res = await getProductDetail(id);
            console.log('data',res)
            setProduct(res);
        }
        getitem();
    },[])
    return (
        <div>
            <h1>hello</h1>
            <Slider {...settings}>
               {
                   product?.info.img.map((item,index) => (
                       <div key={index}>
                            <img src={item} alt='up' className='slide-img' />
                       </div>
                   ))
               }
            </Slider>
            <h1>{product?.name}</h1>
            <h1>{product?.price}$</h1>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="select-helper-label"> Color</InputLabel>
            <Select
            labelId="select-helper-label"
            id="select-helper"
            value={color}
            label=" Color"
            onChange={handleChangeSelect}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    product?.info.color.map((item,index) => (
                        <MenuItem key={index} value={item} >
                            {item}
                        </MenuItem>
                    ))
                }
            </Select>
            </FormControl>
             <div>
                 <button onClick={handleDecrease}>-</button>
                 <span>{amount}</span>
                 <button onClick={handleIncrease}>+</button>
             </div>
             <Button variant='contained' color='primary' onClick={handleAddToCart}>ADD</Button>
        </div>
    )
}

export default Detail

import React from 'react'
import {useAppDispatch, useAppSelector} from 'app/hooks';
import { Button, Container, Grid, Typography } from '@mui/material';
import { remove, increase, decrease} from './cartSlice';
import {CartItem} from 'lib';
import { Link } from 'react-router-dom';
import './index.scss'
interface Props {
    
}

const CartPage = (props: Props) => {
    const dispatch = useAppDispatch()
    const products = useAppSelector(state => state.cart);
    const total = products.reduce((values,currenItem) => {
       return values+currenItem.totalPay;
    },0)
    const handleRemove = (id: string) => {
        dispatch(remove(id));
    }
    const handleDecrease = (item: CartItem) => {
        if(item.amount>1)
        dispatch(decrease(item.id));
    }
    const handleIncrease = (item: CartItem) => {
        dispatch(increase(item.id));

    }
    return (
        <Container className='Cart-Container'>
            <Grid container >
             <Grid item xs={12} md={8} lg={8}>
             {products.map((product) =>(
                <div key={product.id}>
                    <Link to={`/${product.slug}/${product.id}`}>
                     <img src={product.thumbnail} />
                     </Link>
                     <h1>price {product.price}$</h1>
                     <h1>total : {product.totalPay}$</h1>
                     <h1>{product.color}</h1>
                     <div>
                     <Button variant='contained' color='primary' onClick={()=> {handleDecrease(product)}}>-</Button>
                     <span>{product.amount}</span>
                     <Button variant='contained' color='primary' onClick={()=> {handleIncrease(product)}}>+</Button>
                     </div>
                     <Button variant='contained' color='primary' onClick={()=> {handleRemove(product.id)}}>remove</Button>
                </div>
            ))}
             </Grid>
             <Grid item xs={12} md={4} lg={4}>
                 <Typography component='h3'>thành tiền</Typography>
                 <h1>{total}$</h1>

                 <Button variant='contained' color='primary'>Pay</Button>
             </Grid>
             </Grid>
        </Container>
    )
}

export default CartPage

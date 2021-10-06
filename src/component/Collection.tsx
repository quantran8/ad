import CloseIcon from '@mui/icons-material/Close';
import { Button, 
         Card, 
         CardContent, 
         CardMedia, 
         Container, 
         Grid, 
         Snackbar, 
         Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Product } from 'api/lib';
import { getProducts } from 'api/products';
import { useAppDispatch } from 'app/hooks';
import { addToCart } from 'features/cart/cartSlice';
import { CartItem } from 'lib/index';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import './index.scss';
interface Props {
    
}
interface Slug{
   slug?: string;
}
const Collection = (props: Props) => {
    const dispatch = useAppDispatch();
    const {slug}:Slug = useParams();
    const route = useRouteMatch();
    const [product,setProduct] = useState<Array<Product>>([]);
    const [open,setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }
    const action = (
        <>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      );
    useEffect(()=> {
       const collection = async() => {
           const res = await getProducts(slug);
           console.log(res)
           setProduct(res);
           
       }
       console.log(route)
       collection();
       
    },[])
    const handleClick = (item: Product) => {
       const product:CartItem = {
           id:item._id,
           name:item.name,
           thumbnail:item.thumbnail,
           slug:item.slug,
           amount:1,
           price:item.price,
           color:item.info.color[0],
           totalPay:item.price
       }
       dispatch(addToCart(product));
       setOpen(true);

    }
    return (
       <Container>
        <Grid container spacing={3}>
            {product.map(item => (
                <Grid 
                item 
                key={item._id}
                xs={6} sm={6} md={4} lg={3}  
                className='item'
                >
                    <Card elevation={3}>
                        <Link className='link' to ={`${route.url}/${item._id}`}>
                            <CardMedia>
                                <img src={item.thumbnail} />
                            </CardMedia>
                            <CardContent>
                                <Typography>{item.name}</Typography>
                                <Typography>{item.price}$</Typography>
                            </CardContent>
                        </Link>
                    <Button variant='contained' color='primary' onClick={()=>{handleClick(item)}}>ADD</Button>
                    </Card>
                </Grid>
            ))}
        </Grid>
        <Snackbar
        anchorOrigin={{vertical:'top',horizontal:'right'}}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="add to cart success"
        action={action}
       />
           {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}
        {/* </Snackbar> */}
        </Container>
       

    )
}

export default Collection

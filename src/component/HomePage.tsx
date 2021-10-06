import React from 'react'
import {Grid, Container } from '@mui/material';
import {Link} from 'react-router-dom';
import e_bikes from 'imgs/e_bikes.png';
import city_bikes from 'imgs/city_bikes.png';
import road_bikes from 'imgs/road_bikes.png';
import mountain_bikes from 'imgs/mountain_bikes.png';
import './index.scss';
interface Props {
    
}

const HomePage = (props: Props) => {
    return (
   
             <div className='Container'>
                <div className="Product-List ">
                    <Link to='/moutainbikes'>
                       <div className="Product-List_Item ">
                            <h1>Moutain Bike</h1>
                            <img src={mountain_bikes} />
                       </div>
                    </Link>
                </div>
                <div className="Product-List ">
                    <Link to='/road_bike'>
                        <div className="Product-List_Item ">
                            <h1>Road Bike</h1>
                            <img src={road_bikes} />
                        </div>
                     </Link>
                </div>
                <div className="Product-List ">
                   <Link to='/citybikes'>
                        <div className="Product-List_Item ">
                            <h1>City bike</h1>
                            <img src={city_bikes} />
                        </div>
                    </Link>
                </div>
                <div className="Product-List">
                    <Link to='/e_bike'>
                        <div className="Product-List_Item ">
                            <h1>E-Bike</h1>
                            <img src={e_bikes} />
                        </div>
                    </Link>
                </div>
             </div>
       
    )
}

export default HomePage

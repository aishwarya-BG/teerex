import React, { useState } from 'react'
import CategoryComponent from '../entity/CategoryComponent';
import bannerimg from '../../assets/SPECIAL.png'
import ProductByCategory from '../entity/ProductByCategory';
import classes from './home.module.css'

import Header from './Header';
import Cart from '../cart/Cart';


function Home(props) {

    const [showcart, setShowcart] = useState(false);

    const showcartHandler = () =>
    {
      setShowcart(true);
    }

    const hidecartHandler = () =>
    {
      setShowcart(false);
    }

    return (
        <div className={classes.all}>
          {showcart && <Cart onClose={hidecartHandler}/>}
          <Header onShowcart = {showcartHandler} />
          <h1>Welcome</h1>
          <br/>
          <div className={classes['main-image']}>
          <img src={bannerimg}/></div>
          <ProductByCategory/>
        </div>
    )
}

export default Home;

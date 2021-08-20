import React from 'react'
import CategoryComponent from '../entity/CategoryComponent';
import bannerimg from '../../assets/SPECIAL.png'
import ProductByCategory from '../entity/ProductByCategory';
import classes from './home.module.css'

import Header from './Header';


function Home(props) {
    return (
        <div className={classes.all}>
          <Header user={props.user} Logout={props.Logout} />
          <h1>Welcome</h1>
          <br/>
          {/*<img src={bannerimg} class="img-fluid" alt="Responsive image" ></img>*/}
          <ProductByCategory/>
        </div>
    )
}

export default Home;

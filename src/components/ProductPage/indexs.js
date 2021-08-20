import React from 'react'
import CategoryComponent from '../entity/CategoryComponent';
import ProductByCategory from '../entity/ProductByCategory';

import Header from './Header';
import classes from './index.module.css'


function Indexs(props) {
    return (
        <div>
          <Header user={props.user} Logout={props.Logout}/>
          <h2>Welcome, <span>{props.user.username}</span></h2>
          <ProductByCategory/>
        </div>
    )
}

export default Indexs;

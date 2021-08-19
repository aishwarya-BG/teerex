import React from 'react'
import CategoryComponent from '../entity/CategoryComponent';

import Header from './Header';
import classes from './index.module.css'


function Indexs(props) {
    return (
        <div>
          <Header user={props.user} Logout={props.Logout}/>
          <h2>Welcome, <span>{props.user.username}</span></h2>
          <button onClick={props.Logout}>Logout</button>
          <CategoryComponent/>
        </div>
    )
}

export default Indexs;

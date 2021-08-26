import React from 'react'
import { Route } from 'react-router-dom'
import { withPrivilege } from '../adminAuthentication/Privilege'
import HeaderAdmin from './HeaderAdmin'
import Tables from './Tables'
import footer from '../../assets/footer.png'
import classes from './Admin.module.css'

function Admin() {
    return (
        <div>
        <HeaderAdmin/>
        <Tables/>
        <div className={classes["main-image"]}>
        <img src={footer}/>
        </div>
        </div>
    )
}

export default withPrivilege({ role: "admin" })(Admin);

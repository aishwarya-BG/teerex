import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../ProductPage/Header'
import Tables from './Tables'

function Admin() {
    return (
        <div>
        <Header/>
        <Tables/>
        </div>
    )
}

export default Admin

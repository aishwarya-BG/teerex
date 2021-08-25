import React from 'react'
import { Route } from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin'
import Tables from './Tables'

function Admin() {
    return (
        <div>
        <HeaderAdmin/>
        <Tables/>
        </div>
    )
}

export default Admin

import { result } from 'lodash';
import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Category.module.css';
import { baseURL } from '../../constants/constant';
import { NavItem } from 'react-bootstrap';


function CategoryComponent(props)
{
    const [categorys, setCategorys] = useState([]);
    const [id, setId] = useState(1);
    const [show, setShow] = useState(false);

    let history = useHistory();
    useEffect(()=>
    {
        fetch(`${baseURL}/categoryapi/list`)
        .then(res=>res.json())
        .then(
            (result) =>
            {
                setCategorys(result);
            }
        )
    }, []);
    


    return (
        <div className={classes.catback}>
            <ul className="list-group">
                {categorys.map(c=>(
                    <li className={`${classes.tab} ${(id===c.categoryId) ? classes.active : ''}`} key={c.categoryId} id={c.categoryName} onClick={()=>{props.setId(c.categoryId); props.setCategoryName(c.categoryName); setId(c.categoryId)}}>
                        {c.categoryName}
                    </li>
                ))}
            </ul>
           </div> 
    )
}

export default CategoryComponent
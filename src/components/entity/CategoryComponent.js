import { result } from 'lodash';
import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Category.module.css';


function CategoryComponent(props)
{
    const [categorys, setCategorys] = useState([]);
    const [id, setId] = useState(1);
    const [show, setShow] = useState(false);

    let history = useHistory();
    useEffect(()=>
    {
        fetch('http://localhost:8080/categoryapi/list')
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
            {/*<h2 className={classes.h2} >Categories</h2>*/}
            <br/>
            <br/><br/><br/>
            <ul class="list-group">
                {categorys.map(c=>(
                    <li className = {classes.li} class="list-group-item" key={c.categoryId} id={c.categoryName} onClick={()=>{props.setId(c.categoryId); props.setCategoryName(c.categoryName)}}>
                        {c.categoryName}
                    </li>
                ))}
            </ul>
           </div> 
    )
}

export default CategoryComponent
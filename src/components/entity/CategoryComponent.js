import { result } from 'lodash';
import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function CategoryComponent()
{
    const [categorys, setCategorys] = useState([]);
    let history = useHistory();
    useEffect(()=>
    {
        fetch('http://localhost:8080/category/list')
        .then(res=>res.json())
        .then(
            (result) =>
            {
                setCategorys(result);
            }
        )
    })

    const hiHandler =() =>
    {
        history.push("/newii");
    }

    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {categorys.map(c=>(
                    <li key={c.categoryId} onClick={hiHandler}>
                        {c.categoryName}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryComponent
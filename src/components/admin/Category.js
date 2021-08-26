import React from "react";
import { useEffect, useState } from "react";
import NewCategory from "./NewCategory";

function Category(props) {
  useEffect(() => {
    console.log(props.category);
    console.log("fasf");
    console.log(category);
  }, []);

  const [newCategory, setNewCategory] = useState(false);
  const [category, setCategory] = useState(props.category);
  const [order, setOrder] = useState("ASC");
  
  const sorting = (col) =>
  {
    if(order=="ASC")
    {
      const sorted = [...category].sort((a,b)=>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
      setCategory(sorted);
      setOrder("DESC");
    }
    if(order=="DESC")
    {
      const sorted = [...category].sort((a,b)=>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1)
      setCategory(sorted);
      setOrder("ASC");
    }
  }

  const sortingnum = (col) =>
  {
    if(order=="ASC")
    {
      const sorted = [...category].sort((a,b)=>
      a[col] > b[col] ? 1 : -1)
      setCategory(sorted);
      setOrder("DESC");
    }
    if(order=="DESC")
    {
      const sorted = [...category].sort((a,b)=>
      a[col] < b[col] ? 1 : -1)
      setCategory(sorted);
      setOrder("ASC");
    }
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th onClick = {()=>{sortingnum("categoryId")}} scope="col">Category ID</th>
            <th onClick = {()=>{sorting("categoryName")}} scope="col">List</th>
          </tr>
        </thead>
        <tbody>
          {props.category.map((item) => (
            <tr key={item.categoryId}>
              <th scope="row">{item.categoryId}</th>
              <td>{item.categoryName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="btn btn-success btn-lg"
        onClick={() => {
          setNewCategory(true);
        }}
      >
        Add Category
      </button>
      {newCategory && <NewCategory setNewCategory={setNewCategory}/>}
    </div>
  );
}

export default Category;

import React from "react";
import { useEffect, useState } from "react";
import NewCategory from "./NewCategory";

function Category(props) {
  useEffect(() => {
    console.log(props.category);
  }, []);

  const [newCategory, setNewCategory] = useState(false);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Category ID</th>
            <th scope="col">List</th>
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

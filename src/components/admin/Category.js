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
      <h1>Category</h1>
      <table>
        <thead>
          <tr>
            <td>List</td>
          </tr>
        </thead>
        <tbody>
          {props.category.map((item) => (
            <tr key={item.categoryId}>
              <td>{item.categoryName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => {
          setNewCategory(true);
        }}
      >
        Add Category
      </button>
      {newCategory && <NewCategory />}
    </div>
  );
}

export default Category;

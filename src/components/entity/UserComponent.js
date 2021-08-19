import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import UserService from "../../service/UserService";

const UserComponent = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      const response = await UserService.getUsers();
      const { data = [], status } = response;
      if (status === 200 && data.length) {
        setUsers(data);
      }
    } catch (error) {
      console.error({ error });
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <td>Username</td>
            <td>Password</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserComponent;

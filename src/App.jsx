import axios from "axios";
import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";
import Maths from "./components/Maths";

function App() {
  const [users, setUsers] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  function handleChange(e) {
    const selectedId = e.target.value;
    const findUser = users.find(user => user.id == selectedId);
    
    setSelectedUser(findUser);
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <select onChange={handleChange}>
        <option value={""}>---</option>
        {users?.map((user) => {
          return (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
      <h1>
        Selected User: {selectedUser ? selectedUser?.name : "no user selected "}{" "}
      </h1>
      <Posts selectedId={selectedUser?.id} />
      <Maths/>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import DynamicTable from "./DynamicTable";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Shivansh", age: 22, completed: false },
    { id: 2, name: "Raj", age: 23, completed: false },
    { id: 3, name: "Aman", age: 21, completed: false },
  ]);

  const [newUser, setNewUser] = useState({ name: "", age: "" });

  // Add new row
  const addUser = () => {
    if (newUser.name.trim() === "" || newUser.age.trim() === "") return;
    const newEntry = {
      id: users.length + 1,
      name: newUser.name,
      age: newUser.age,
      completed: false,
    };
    setUsers([...users, newEntry]);
    setNewUser({ name: "", age: "" });
  };

  // Delete row
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, completed: !user.completed } : user
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dynamic CRUD Table Example</h2>

      {/* Input form */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Enter Age"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
        <button onClick={addUser}>Add User</button>
      </div>

      {/* Table */}
      <DynamicTable data={users} onDelete={deleteUser} onToggle={toggleComplete} />
    </div>
  );
}

export default App;

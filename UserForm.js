import React, { useState, useEffect } from 'react';

    const UserForm = ({ addUser, updateUser, editingUser, setEditingUser }) => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    role: 'User'
  });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser({
        name: '',
        email: '',
        role: 'User'
      });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.trim() === '' || user.email.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    if (editingUser) {
      updateUser(user);
    } else {
      addUser(user);
    }

    setUser({
      name: '',
      email: '',
      role: 'User'
    });
  };

  return (
    <div>
      <h2>{editingUser ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select name="role" value={user.role} onChange={handleChange}>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Editor">Editor</option>
          </select>
        </div>
        <button type="submit">{editingUser ? 'Update' : 'Add'} User</button>
        {editingUser && (
          <button type="button" onClick={() => setEditingUser(null)}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default UserForm;
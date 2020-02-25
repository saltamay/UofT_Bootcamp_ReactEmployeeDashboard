import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';
import AdvanceFilter from './components/AdvanceFilter';
import { getUsers } from './utils';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(users => {
      setUsers(users);
    });
  }, []);

  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleSearch = (name, department) => {
    const searchResults = users.filter(user => {
      if (
        user.department.toLowerCase() === department.toLowerCase() &&
        user.name.toLowerCase().includes(name.toLowerCase())
      ) {
        return user;
      }
    });
    setFilteredUsers(searchResults);
  };

  return (
    <div className='App'>
      <div className='container mt-5'>
        <Header />
        <Search handleSearch={handleSearch} />
        <AdvanceFilter />
        {/* <Main /> */}
        <Table filteredUsers={filteredUsers} />
      </div>
    </div>
  );
}

export default App;

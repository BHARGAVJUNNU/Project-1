import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Query from './Query';

function App() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('/api/items');
    setData(response.data);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setName(item.name);
    setDescription(item.description);
    setPrice(item.price);
  };

  const handleAdd = async () => {
    const response = await axios.post('/api/items', {
      name,
      description,
      price,
    });
    setData([...data, response.data]);
  };

  const handleUpdate = async () => {
    const response = await axios.put(`/api/items/${selectedItem.id}`, {
      name,
      description,
      price,
    });
    const updatedData = data.map((item) =>
      item.id === response.data.id ? response.data : item
    );
    setData(updatedData);
  };

  const handleDelete = async () => {
    await axios.delete(`/api/items/${selectedItem.id}`);
    const filteredData = data.filter((item) => item.id !== selectedItem.id);
    setData(filteredData);
    setSelectedItem({});
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <Query/>
  );
}

export default App;

import React, { useState } from 'react';
import axios from 'axios';
import './Query.css';

const Query = () => {
  const [selectedQuery, setSelectedQuery] = useState('');
  const [customQuery, setCustomQuery] = useState('');
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const predefinedQueries = [
    'SELECT * FROM Bikes;',
    'SELECT * FROM Rentals;',
    'SELECT * FROM Customers;',
    'SELECT * FROM Rentals WHERE rental_date >= "2022-01-01";',
    'SELECT c.first_name, COUNT(r.rental_id) AS num_rentals FROM Customers c JOIN Rentals r ON c.customer_id = r.customer_id GROUP BY c.customer_id ORDER BY num_rentals DESC;'
  ];

  const handleQuerySelect = (event) => {
    setSelectedQuery(event.target.value);
    setCustomQuery('');
  };

  const handleCustomQueryChange = (event) => {
    setSelectedQuery('');
    setCustomQuery(event.target.value);
  };

  const handleQuerySubmit = async (event) => {
    event.preventDefault();
    const query = selectedQuery || customQuery;
    try {
      const response = await axios.post('http://localhost:3002/api/query', { query });
      setColumns(response.data.columns);
      setRows(response.data.rows);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="query-container">
      <h1>Bike Rental App</h1>
      <h2>Query</h2>
      <form onSubmit={handleQuerySubmit}>
        <select className="query-select" value={selectedQuery} onChange={handleQuerySelect}>
          <option value="">Select a predefined query</option>
          {predefinedQueries.map((query, index) => (
            <option key={index} value={query}>
              {query}
            </option>
          ))}
        </select>
        <input
          className="query-input"
          type="text"
          placeholder="Enter a custom query"
          value={customQuery}
          onChange={handleCustomQueryChange}
        />
        <button className="query-submit" type="submit">Submit</button>
      </form>
      {columns.length > 0 && rows.length > 0 && (
        <table className="query-results">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column}>{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Query;

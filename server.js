const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'bike_rental_db',
  authPlugins: {
    mysql_native_password: {
      passwordEncryption: 'SHA2_PASSWORD',
    },
  },
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

app.post('/api/query', async (req, res) => {
  const { query } = req.body;
  try {
    db.query(query, (error, rows, fields) => {
      if (error) throw error;
      res.json({ columns: fields.map((field) => field.name), rows });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error executing query');
  }
});


// Add more API routes for CRUD operations here

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

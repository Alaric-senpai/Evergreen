const express = require('express');
const mariadb = require('mariadb');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'alaric',
  password: 'alaric',
  database: 'evergreen',
  connectionLimit: 5
});

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the server!' });
});

// User login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  let conn;

  try {
    conn = await pool.getConnection();
    const rows = await conn.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (rows.length > 0) {
      const user = rows[0];
      if (password === user.password) {
        res.json({ message: 'Login successful', user: { email: user.email, usertype: user.usertype } });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  } finally {
    if (conn) conn.release();
  }
});


app.get('/user' , async (req , res)=>{
  const email = reg.body;

  let conn;

  try {
    conn = await  pool.getConnection();

    const row = await conn.query(
      'SELECT * FROM userdetails WHERE email=?',
      [email]

    );
    if(row.length > 0){
      const user = row[0];
      res.json({message: 'user data fetched correctly', user :{email: user.email, firstname: user.firstname, lastname: user.lastname, position: user.position}})

    }else{
      res.status(404).json({ message: 'User not found' });

    }
  } catch (error) {
    
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  } finally {
    if (conn) conn.release();
  }
  //  res.send('hello from simple server :)')

})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
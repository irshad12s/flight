// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const flightRoutes = require('./routes/flightRoutes');
const cors = require('cors'); // Import cors
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(express.json());


dotenv.config();
connectDB();


app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/flights', flightRoutes);

app.get('/', (req, res) => {
  res.send('Its connected')
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URL; 
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })   
 .then(() => console.log('Connected to MongoDB'))   
 .catch(err => console.error('Could not connect to MongoDB', err));
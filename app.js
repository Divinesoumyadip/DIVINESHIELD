const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const reportRoutes = require('./routes/report');

const app = express();

mongoose.connect('mongodb://localhost:27017/womensafety', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use('/api/report', reportRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


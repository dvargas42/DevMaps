const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://daniel:Malide59@cluster0-on3ve.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
app.use(express.json());
app.use(routes);

app.listen(3333);

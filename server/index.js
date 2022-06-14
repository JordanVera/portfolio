const express = require('express');
const postSubmitForm = require('./api/submitForm.js');

const app = express();

app.post('/submitForm', postSubmitForm);

module.exports = app;

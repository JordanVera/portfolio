const express = require('express');
const postSubmitForm = require('./api/submitForm.js');
const { generateImage } = require('./api/controllers/openaiController.js');
const router = express.Router();

router.post('/submitForm', postSubmitForm);

router.post('/generateimage', generateImage);

module.exports = router;

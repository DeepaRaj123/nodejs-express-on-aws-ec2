const express = require('express');
const {showwelcomeMessage} = require('../controllers/enquiryController');


const router = express.Router();


router.get('/', showwelcomeMessage);

module.exports = {
    routes: router
}
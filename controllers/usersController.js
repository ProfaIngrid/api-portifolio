const express = require('express');
const dbConecta = require('../models/dbConnection');
const router = express.Router();

router.get('/', (req, res) => {
    dbConecta.query('SELECT * FROM users', (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

router.get('/', (req, res) => {
    dbConecta.query('SELECT * FROM users WHERE id = 2', (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

module.exports = router;

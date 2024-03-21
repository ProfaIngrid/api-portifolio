const express = require('express');
const dbConecta = require('../models/dbConnection');
const router = express.Router();

router.get('/', (req, res) => {
    dbConecta.query('SELECT * FROM users', (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

router.get('/id/:id', (req, res) => {
    const id = req.params.id;
    dbConecta.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

module.exports = router;

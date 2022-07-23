const express = require('express');
const router = express.Router();
const { create, updateById } = require('../../daos/CustomerSupportDao')

// router.get('/', (req, res) => {
//     findAll(res, 'customer_support');
// });

// router.get('/count', (req, res) => {
//     countAll(res, 'customer_support');
// });

// router.get('/:id', (req, res) => {
//     findById(res, 'customer_support', req.params.id);
// });

router.post('/create', (req, res) => {
    create(req, res,'customer_support');
});

router.patch('/update/:id', (req, res) => {
    updateById(req, res);
});

// router.get('delete/:id', (req, res) => {
//     deleteById(req, res, req.params.id);
// });

module.exports = router;
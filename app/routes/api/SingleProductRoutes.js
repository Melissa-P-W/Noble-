const express = require('express');
const router = express.Router();
const {findAll,findById} = require("../../daos/daoCommon")


router.get("/:id", (req, res) => {
    findById(res, 'noble_sports_and_goods', req.params.id)
})

router.get('/', (req, res) => {
    findAll(res, 'noble_sports_and_goods')
})



module.exports = router;
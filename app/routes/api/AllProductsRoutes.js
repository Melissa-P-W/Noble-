const express = require('express');
const router = express.Router();
const {singleProductDoa: doa} = require("../../daos/daoCommon")


router.get("/:id", (req, res) => {
    doa.findById(res, doa.table, req.params.id)
})

router.get('/', (req, res) => {
    dao.findAll(res, dao.table)
})



module.exports = router;
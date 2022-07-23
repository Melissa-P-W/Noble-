const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3021;


router.get('/', (req, res) => {
    res.json({
        'All noble': `http://localhost:${PORT}/api/noble`,
        'CustomerSupport': `http://localhost:${PORT}/api/customer_support`,
    });
});



router.use('/noble', require('./api/SingleProductRoutes'));
router.use('/noble', require('./api/AllProductsRoutes'));
router.use('/customer_support', require('./api/CustomerSupportRoutes'));


module.exports = router;

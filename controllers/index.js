const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// any other routes for the index file?
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
const { Router } = require('express');
const Api = require('../services/api-service');
const router = Router();


router.get('/all',
    Api.getAllEntries
);

module.exports = router;
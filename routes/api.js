const { Router } = require('express');
const Api = require('../services/api-service');
const router = Router();


router.get('/',
    Api.sampleEndPoint
);

module.exports = router;
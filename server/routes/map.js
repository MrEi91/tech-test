'use strict'
const express = require('express');
const router = express.Router()

const controller = require('../controllers/mapController')

router.get('/vacancy', controller.getDataExample)
router.get('/jakarta', controller.getDataJakarta)

module.exports = router

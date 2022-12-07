const express = require('express')

const router = express.Router()
const { getOrganismos } = require('../../controllers/OrganismosController')

router.get(
    '/',
    getOrganismos
)

module.exports = router

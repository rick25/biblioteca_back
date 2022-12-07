const { response } = require('express')
const Organismo = require('../models/OrganismoModel')

const getOrganismos = async (req, res = response) => {
    const organismos = await Organismo.find()

    return res.status(200).json({
        ok: true,
        organismos
    })
}

module.exports = {
    getOrganismos,
}
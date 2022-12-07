const express = require('express')
const orgsRouter = require('./OrganismosRouter')

const router = express.Router()

const defaultRoutes = [
    {
        path: '/organismos',
        route: orgsRouter,
    },
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
});

module.exports = router

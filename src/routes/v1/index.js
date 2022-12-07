const express = require('express')
const orgsRouter = require('./OrganismosRouter')
const docsRouter = require('./DocumentacionRouter')

const router = express.Router()

const defaultRoutes = [
    {
        path: '/organismos',
        route: orgsRouter,
    },
]
const developmentRoutes = [
    {
        path: '/docs',
        route: docsRouter,
    }
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
});

if (process.env.ENVIRONMENT === 'development') {
    developmentRoutes.forEach((route) => {
        router.use(route.path, route.route);
    })
}

module.exports = router

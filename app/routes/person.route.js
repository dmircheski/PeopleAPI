const middleware = require('../middleware/middleware')

module.exports = (app) => {
    const people = require('../controllers/person.controller')


    const router = require("express").Router();

    router.post('/person', middleware.authenticateToken, people.create);
    router.get('/people', middleware.authenticateToken, people.findAll);
    router.get('/person/:personId', middleware.authenticateToken, people.findOne);
    router.put('/person/:personId', middleware.authenticateTokenAndAdminRole, people.update);
    router.delete('/person/:personId', middleware.authenticateTokenAndAdminRole, people.delete);

    app.use('/api', router);
}
module.exports = (app) => {
    const people = require('../controllers/person.controller')
    // require('.controllers/person.controller')

    const router = require("express").Router();

    router.post('/person', people.create);
    router.get('/people', people.findAll);
    router.get('/person/:personId', people.findOne);
    router.put('/person/:personId', people.update);
    router.delete('/person/:personId', people.delete);

    app.use('/api', router);
}
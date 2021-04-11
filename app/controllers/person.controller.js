const Person = require('../models/person.model');

exports.create = (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
            message: "Person name cannot be empty"
        });
    }

    const person = new Person ({
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        isEmployed: req.body.isEmployed,
        location: req.body.location
    });

    person.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send( {
            message: err.message || "Some error occured while creating person data "
        })
    })
};

exports.findAll = (req, res) => {
    Person.find()
    .then(people => {
        res.send(people);
    }).catch(err => {
        res.status(500).send( {
            message: err.message || "Some error occured while retriving people data"
        });
    });
};

exports.findOne = (req, res) => {
    Person.findById(req.params.personId)
    .then(person => {
        if(!person) {
            return res.status(404).send( {
                message: "Person with id "+ req.params.personId +" not found"
            });
        }
        res.send(person);
    }).catch(err => {
        if(err.kind == 'ObjectId') {
            return res.status(404).send( {
                message: "Person with id "+ req.params.personId +" not found"
            });
        }

        return res.status(500).send ( {
            message: "Error retriving person with id "+ req.params.personId
        });
    });
};

exports.update = (req, res) => {
    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Request body cannot be empty"
        });
    }

    if(!req.body.location) {
        return res.status(400).send({
            message: "Person's location cannot be left empty !"
        });
    }

    if(!req.body.isEmployed) {
        return res.status(400).send({
            message: "Person's employment cannot be empty !"
        });
    }

    const personId = req.params.personId;

    Person.findByIdAndUpdate(req.params.personId, {
        isEmployed: req.body.isEmployed,
        location: req.body.location
    }, {omitUndefined: true})
    .then(person => {
        if(!person) {
            return res.status(404).send({
                message: "Person with id=" + personId + " not found"
            });
        } else {
            res.send({
                message: "Person with id=" + personId + " has been succesfully updated"
            })
        }
       
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Person with id=" + personId + " not found"
            });
        }

        return res.status(500).send({
            message: "Error updating person with id" + personId
        });
    });
};

exports.delete = (req, res) => {
    const personId = req.params.personId;

    Person.findByIdAndRemove(req.params.personId)
    .then(person => {
        if(!person) {
            return res.status(404).send({
                message: "Cannot delete Person because Id " + personId + "is not existant"
            });
        }
        res.send({ message: "Person with id=" + personId + " has been succesfully deleted" })
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'Not Found') {
            return res.status(404).send({
                message: "Person with id=" + personId + " not found"
            });
        }

        return res.status(500).send({
            message: "Could not detele Person with id=" + personId + ". Some error occured."
        })
    })
};
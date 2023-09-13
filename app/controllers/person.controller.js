const Person = require('../models/person.model');

exports.create = (req, res) => {
    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
            code: "P400",
            message: "Request body cannot be empty"
        })
    }

    if (!req.body.name) {
        return res.status(400).send({
            code: "P400",
            message: "Person's name cannot be empty"
        });
    }

    if (!req.body.surname) {
        return res.status(400).send({
            code: "P400",
            message: "Person's surname cannot be empty"
        });
    }

    if(req.body.isEmployed == null) {
        return res.status(400).send({
            code: "P400",
            message: "Person must provide if he is employed or not"
        });
    }

    const person = new Person({
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        isEmployed: req.body.isEmployed,
        location: req.body.location
    });

    person.save()
        .then(personData => {
            res.status(201).send({
                code: "P201",
                message: "Person succesfully inserted",
                personData
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating person data "
            })
        })
};

exports.findAll = (req, res) => {
    Person.find()
        .then(peopleData => {
            res.send({
                code: "P200",
                message: "List of people successfully fetched",
                numberOfPeople: peopleData.length,
                peopleData
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while retriving people data"
            });
        });
};

exports.findOne = (req, res) => {
    Person.findById(req.params.personId)
        .then(person => {
            res.send({
                code: "P200",
                message: "Person succesfully fetched",
                person
            });
        }).catch(err => {
            if (err.kind == 'ObjectId') {
                return res.status(404).send({
                    code: "P404",
                    message: "Person with id " + req.params.personId + " not found"
                });
            }

            return res.status(500).send({
                message: "Error retriving person with id " + req.params.personId
            });
        });
};

exports.update = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            code: "P400",
            message: "Request body cannot be empty"
        });
    }

    if (!req.body.location) {
        return res.status(400).send({
            code: "P400",
            message: "Person's location must be provided to be updated !"
        });
    }

    const personId = req.params.personId;

    Person.findByIdAndUpdate(req.params.personId, {
        location: req.body.location
    }, { new: true })
        .then(person => {
            if (!person) {
                return res.status(404).send({
                    code: "P404",
                    message: "Person with id=" + personId + " not found"
                });
            } else {
                res.send({
                    code: "P200",
                    message: "Person's location succesfully updated !",
                    person
                })
            }

        }).catch(err => {
            if (err.kind === 'ObjectId') {
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
            if (!person) {
                return res.status(404).send({
                    code: "P404",
                    message: "Cannot delete Person because Id " + personId + "is not existant"
                });
            }
            res.send({
                code: "P200",
                message: "Person with id=" + personId + " has been succesfully deleted"
            })
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'Not Found') {
                return res.status(404).send({
                    message: "Person with id=" + personId + " not found"
                });
            }

            return res.status(500).send({
                message: "Could not detele Person with id=" + personId + ". Some error occured."
            })
        })
};
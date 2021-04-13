const express = require("express");
const Router = express.Router();

const People = require("./Model");


exports.getAllEntry = async (req, res) => {
    const persons = await People.find();
    res.status(200).json(
        {
            developer: "AGHO.DEV",
            report: true,
            totalData: persons.length,
            data: persons
        }
    );
};


exports.createEntry = async (req, res) => {
    const persons = await People.create(req.body);
    res.status(201).json(persons)
};


exports.getSingleEntry = async (req, res) => {
    const persons = await People.findById(req.params.id)
    res.status(200).json(persons);
};

exports.updateSingleEntry = async (req, res) => {
    const persons = await People.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json(persons);
};


exports.deleteSingleEntry = async (req, res) => {
    const persons = await People.findByIdAndDelete(req.params.id)
    res.status(200).json(persons);
};


// module.exports = Router;
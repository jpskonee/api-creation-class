const express = require("express");
const Router = express.Router();

const { getAllEntry,
    getSingleEntry,
    updateSingleEntry,
    deleteSingleEntry,
    createEntry }
    = require("./View");


Router.route("/").get(getAllEntry).post(createEntry)
Router.route("/:id").delete(deleteSingleEntry).patch(updateSingleEntry).get(getSingleEntry)

module.exports = Router;
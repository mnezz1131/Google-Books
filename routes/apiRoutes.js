// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// apiRoutes.js
const router = require("express").Router();
const db = require("../models");


router.post("/books", (req, res) => {
    db.Book.create(req.body)
        .then((results) => res.json(results))
        .catch(err => res.status(422).json(err));
});
module.exports = router;
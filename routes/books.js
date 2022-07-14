const express = require("express");
const router = express.Router();
const books = require("../models/dbmodel");

router.get("/all", (req, res)=>{
    books.findAll().then(books => res.send(books));
});

//get book by its id
router.get("/all/:id", (req, res) =>{
    books.findByPk(req.params.id).then(bookRequested => res.send(bookRequested));
});

// post new book into the database
router.post("/add", async (req, res)=>{
    books.create({
        title: req.body.title,
        author_id: req.body.author_id,
        description: req.body.description
    }).then(submittedBook => res.send(submittedBook));
});

// update a book
router.put("/att/:id", (req, res)=>{
    books.update({
        title: req.body.title,
        author_id: req.body.author_id,
        description: req.body.description
    },{
        where: {
            id: req.params.id
        }
    }).then(res.send("Book has been updated")).catch(res.send(console.error(error)));
});

//delete a book

router.delete("/remove/:id", (req, res)=>{
    books.destroy({
        where: {
            id: req.params.id
        }
    }).then(()=> res.send("book has been deleted"));
})
module.exports = router;
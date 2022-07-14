const express = require("express");
const books = require("./routes/books");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/books", books);

app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}`);
})
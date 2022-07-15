# bookstore_CRUD

Simple crud application using node.js, express and sequelize.

That's a similiar version of my previou project simple_CRUD_express. Here I'm using the same routes, but with some additions, where the main one is the implementation of sequelize. That allows me to insert, collect, change and delete data from a database. The database choosen was mariaDB.


## Starting the project

To start the project, you will need to have both the project and node.js installed in your machine and run the command:
>node server.js

You will be able to connect to the api on [https://localhost:3000](https://localhost:3000)

# Endpoints
## Routes to manipulate the data

GET [localhost:3000/books/all](localhost:3000/books/all) - list all the books

GET [localhost:3000/books/all/bookId](localhost:3000/books/all/:id) - list a specific book by its ID

POST [localhost:3000/books/add](localhost:3000/books/add) - add a book to the database
> Body: {
	  "title": string,
	  "author_id": int,
	  "description": string,
}

PUT [localhost:3000/books/all/att/bookId](localhost:3000/books/all/att/id) - update a book in the database by its ID
> Body: {
	  "title": string,
	  "author_id": int,
	  "description": string,
}

DELETE [localhost:3000/books/all/remove/bookId](localhost:3000/books/all/remove/id) - remove a book in the database by its ID


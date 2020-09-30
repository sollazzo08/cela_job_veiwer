Knex.js is a library for interacting with databases
  - e.g. create tables, quiere tables
  - it is a query builder
  - you can model your database
  - your sql code is sanitized
 Migrations
  - define all of the tables and relationships
 Seeds
  - define all of the intial data seeded to the database  

It is not a ORM
 - An ORM is a object relational mapper, it is much higher level
 - In an ORM you create your models and your models are related through properties
 - It allows you to set up your code so that you have modeles or objects that describe your
    enities in your database
 - it autumatically figures out the sql queires needed to make the joins happpen between those
 tables 

Objection.js 

- Objection is an ORM
  - it is good for complex quierying 

The Express app mounts:
 - all installed middleware (e.g. helmet, compression....)
 - the api at '/api/v1/'

The jsonSchema is used for validation, and api documentation   

Socket.io can be used to get real time updates to a react front end 

Checkout remote-shh extension on vscode

JSON WEB TOKENS

 - do not put any secure information inside jsonwebtokens
 - 

MISC
 - Probably shouldnt implemnt signin/signup from scratch. It will be safer to use 
   oauth e.g. google or facebook
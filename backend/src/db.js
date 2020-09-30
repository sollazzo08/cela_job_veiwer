// CONNECT TO DATABASE IN THIS FILE
// Brings in the connection from knex.js
// This file creates one knex connection that can be reused throughout the entire app.

const knex = require('knex');
const { Model } = require('objection');

const knexConfig = require('../knexfile');

const environment = process.env.NODE_ENV || 'development';
const connectionConfig = knexConfig[environment];

const connection = knex(connectionConfig);

// Anywhere in the project where you set up a model it will be talking to knex
Model.knex(connection);

module.exports = connection;

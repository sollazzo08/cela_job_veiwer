const Knex = require('knex');
const tableNames = require('../../src/constants/tableNames');
const {
  addDefaultColumns,
  references,
} = require('../../src/lib/tableUtils');
/**
 * @param {Knex} knex
 */
// function for making of a migration
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.state, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    table.string('code').notNullable().unique();
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.user, (table) => {
    table.increments().notNullable();
    table.string('email', 254).notNullable().unique();
    table.string('username').notNullable();
    table.string('password', 127).notNullable();
    table.dateTime('last_login');
    addDefaultColumns(table);
  });
  // Tables below here are dependent on the tables above
  await knex.schema.createTable(tableNames.address, (table) => {
    table.increments().notNullable();
    table.string('street_address', 50).notNullable();
    table.string('city', 50).notNullable();
    table.string('zipcode', 15).notNullable();
    references(table, 'state');
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.customer, (table) => {
    table.increments().notNullable();
    table.string('first_name', 50).notNullable();
    table.string('last_name', 50).notNullable();
    references(table, 'address');
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.job_type, (table) => {
    table.increments().notNullable();
    table.string('job_type', 20).notNullable();
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.job_image, (table) => {
    table.increments().notNullable();
    table.string('image_url', 100);
    addDefaultColumns(table);
  });
  // Call back for creating all the columns ------->
  await knex.schema.createTable(tableNames.job, (table) => {
    table.increments().notNullable();
    references(table, 'user');
    table.string('name').notNullable();
    references(table, 'job_image');
    references(table, 'job_type');
    table.string('description', 200);
    table.integer('job_number').nullable();
    references(table, 'customer');
    addDefaultColumns(table);
  });
};

// function for rollback of a migration
exports.down = async (knex) => {
  // Use Promise.all to drop all the tables simoultanously
  await Promise.all([
    tableNames.job,
    tableNames.user,
    tableNames.job_image,
    tableNames.job_type,
    tableNames.customer,
    tableNames.address,
    tableNames.state,
  ].map((tableName) => knex.schema.dropTable(tableName)));
};

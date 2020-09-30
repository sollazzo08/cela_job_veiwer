const Knex = require('knex');
const tableNames = require('../../src/constants/tableNames');
const {
  addDefaultColumns,
  references,
} = require('../../src/lib/tableUtils');
/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.alterTable(tableNames.user, (table) => {
    table.string('google_id');
    table.renameColumn('username', 'display_name');
    table.dropColumn('email');
    table.dropColumn('password');
    table.string('first_name', 50).notNullable();
    table.string('last_name', 50).notNullable();
    table.string('image_url', 100);
  });
};


/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.alterTable(tableNames.user, (table) => {
    table.dropColumn('google_id');
    table.renameColumn('display_name', 'username');
    table.string('email', 254).notNullable();
    table.string('password', 127).notNullable();
    table.dropColumn('first_name');
    table.dropColumn('last_name');
    table.dropColumn('image_url');
  });
};

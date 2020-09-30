const crypto = require('crypto');
const bcrypt = require('bcrypt');
const Knex = require('knex');

const tableNames = require('../../src/constants/tableNames');
const orderedTableNames = require('../../src/constants/orderTableNames');
const us_states = require('../../src/constants/us_states');


/**
 * @param {Knex} knex
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await orderedTableNames
    .reduce(async (promise, tableName) => {
      await promise;
      console.log('Clearing', tableName);
      return knex(tableName).del();
    }, Promise.resolve());

  const password = crypto.randomBytes(15).toString('hex');

  const user = {
    email: 'mike@gmail.com',
    username: 'mike',
    password: await bcrypt.hash(password, 12),
  };
  const [createdUser] = await knex(tableNames.user)
    .insert(user)
    .returning('*');

  console.log('User created: ', {
    password,
  }, createdUser);

  await knex(tableNames.state).insert(us_states);
};

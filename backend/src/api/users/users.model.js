const { Model } = require('objection');

const tableNames = require('../../constants/tableNames');
const schema = require('./users.schema.json');

class User extends Model {
  static get tableName() {
    return tableNames.user;
  }

  // This does not create the user table, its only for validation
  static get jsonSchema() {
    return schema;
  }
}

module.exports = User;

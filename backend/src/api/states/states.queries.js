const db = require('../../db');

const tableNames = require('../../constants/tableNames');

const fields = ['id', 'name', 'code'];

module.exports = {

  find() {
    return db(tableNames.state).select(fields);
  },
  async get(id) {
    return db(tableNames.state)
      .select(fields)
      .where({
        id,
      })
      .first();
  },
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('patron', (table => {
    table.increments('user_id').primary()
    table.text("first_name")
    table.text("last_name")
    table.text("username")
    table.bigInteger("instagram_id")
    table.text("profile_pic")
  }))
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patron')
};
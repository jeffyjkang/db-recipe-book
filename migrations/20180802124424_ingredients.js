exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", function(tbl) {
    tbl.increments();

    tbl
      .string("Name", 256)
      .notNullable()
      .unique()
      .defaultTo("NotProvided");
  });
};

exports.down = function(knex, Promise) {};

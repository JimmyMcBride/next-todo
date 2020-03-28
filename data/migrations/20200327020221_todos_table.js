exports.up = function(knex) {
  return knex.schema.createTable("todos", tbl => {
    tbl.increments();
    tbl
      .text("name")
      .notNullable()
      .unique();
    tbl.text("description").notNullable();
    tbl
      .integer("userId")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("todos");
};

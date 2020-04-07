exports.up = function (knex, Promise) {
    return knex.schema.createTable('escala', function (table) {
        table.increments('id');
        table.date('data').notNullable();
        table.string('local').notNullable();
        table.time('horario').notNullable();

        table.integer('ministro').notNullable();
        table.foreign('ministro').references('id').inTable('ministro');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('escala');
};

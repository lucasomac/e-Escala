
exports.up = function (knex, Promise) {
    return knex.schema.createTable('ministro', function (table) {
        table.increments('id');
        table.string('name').notNullable();
        table.string('telefone').notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('ministro');
};

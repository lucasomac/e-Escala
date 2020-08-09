import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('ministro', function (table) {
        table.increments('id');
        table.string('name').notNullable();
        table.string('phone').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('ministro');
}

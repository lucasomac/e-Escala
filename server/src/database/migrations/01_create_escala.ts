import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('escala', function (table) {
        table.increments('id');
        table.date('data').notNullable();
        table.time('horario').notNullable();
        table.string('local').notNullable();

        table.integer('ministro').notNullable();
        table.foreign('ministro').references('id').inTable('ministro');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('escala');
}

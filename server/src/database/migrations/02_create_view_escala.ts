import Knex from "knex";

export async function up(knex: Knex) {
    return knex.raw("CREATE VIEW view_escalas AS SELECT data, horario, name FROM ministro JOIN escala on ministro.id = escala.ministro");
}

export async function down(knex: Knex) {
    return knex.raw("DROP VIEW view_escalas");
}

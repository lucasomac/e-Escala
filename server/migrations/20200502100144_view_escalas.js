exports.up = function (knex) {
    return knex.raw("CREATE VIEW view_escalas AS SELECT data, horario, name FROM ministro JOIN escala on ministro.id = escala.ministro");
};

exports.down = function (knex) {
    return knex.raw("DROP VIEW view_escalas");
};
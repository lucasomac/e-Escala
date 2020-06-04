module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(ministro => ministro.trim())
};
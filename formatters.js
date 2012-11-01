var regexes = require('./regexes'),
    reTrailingWhitespace = regexes.trailingWhitespace;

exports.stripTrailingWhitespace = function(line) {
    return line.replace(reTrailingWhitespace, '');
};
const crypto = require('crypto');
function anotherInsecurePassword() {
  // FIXED: use cryptographically secure random suffix
  var suffix = crypto.randomBytes(4).toString('hex'); // generates 8 hex characters
  var password = "sssAAAA" + suffix;
  return password;
}
export function getRandomString() {
  const crypto = require('crypto');
  const id = crypto.randomBytes(20).toString('hex');
  return id;
}

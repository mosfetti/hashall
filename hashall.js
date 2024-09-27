const crypto = require('crypto');

const str = process.argv[2];
const algos = crypto.getHashes()

function hashString(algorithm, str) {
  try {
    const hash = crypto.createHash(algorithm);
    hash.update(str);
    return hash.digest('hex');
  } catch (error) {
    return `Algorithm ${algorithm} is not supported in Node.js`;
  }
}

algos.forEach((algo) => {
  console.log(`${algo}: ${hashString(algo, str)}`);
});

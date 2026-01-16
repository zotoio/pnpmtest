const { greet } = require('@pnpmtest/package-a');

function welcome(name) {
  const greeting = greet(name);
  console.log(greeting);
  return greeting;
}

module.exports = { welcome };

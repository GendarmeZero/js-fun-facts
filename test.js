const { getRandomFact, categories } = require('./index');

console.log("Available categories:", categories.join(", "));

console.log("JavaScript Fact:", getRandomFact("javascript"));

console.log("Node.js Fact:", getRandomFact("node"));

console.log("npm Fact:", getRandomFact("npm"));



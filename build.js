const fs = require("fs");
const path = require("path");

// Read the README
const readmePath = path.join(__dirname, "README.md");
let content = fs.readFileSync(readmePath, "utf8");

// Generate a random number
const randomNumber = Math.floor(Math.random() * 1000000);

// Replace the random number in the README
content = content.replace(
  /Random number: \d+/,
  `Random number: ${randomNumber}`
);

// Write back to README
fs.writeFileSync(readmePath, content, "utf8");

console.log(`✅ Build complete! New random number: ${randomNumber}`);

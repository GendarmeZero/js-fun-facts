# 📦 js-fun-facts

A small and fun Node.js module that provides random facts about **Node.js**, **JavaScript**, and **npm**.  
Perfect as a demo for learning how to create and publish npm packages. 
Feel free to fork and make your own version!
---

## ✨ Features

- 🔹 Simple and lightweight
- 📚 Offers categorized fun facts about JavaScripts , Node & Npm
- ⚡ Requires no dependencies
- 🧪 Great as a beginner-friendly npm package example

---

## 📥 Installation

Use npm to install:

```bash
npm install js-fun-facts
```
## 💻 Usage

To use the js-fun-facts module, simply require it in your JavaScript file and use the **getRandomFact** method to fetch random facts. 
You can specify the category as an argument (default is JavaScript).

```bash
var facts = require("js-fun-facts")
var jsRandomFacts = facts.getRandomFact("javascript");
var nodeRandomFacts = facts.getRandomFact("node");
var npmRandomFacts = facts.getRandomFact("npm");

console.log(`Random facts about JS : ${jsRandomFacts}`);
console.log(`Random facts about Node : ${nodeRandomFacts}`);
console.log(`Random facts about Npm : ${npmRandomFacts}`);

```

## 🪪 Credit
Made with ❤️ by Gendarme_Zero
https://github.com/GendarmeZero/js-fun-facts

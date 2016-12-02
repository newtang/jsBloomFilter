var BloomFilter = require("./BloomFilter.js"),
	bf = new BloomFilter(100);

bf.insert("test");
console.log(bf.contains("test"));
console.log(bf.contains("abcdef"));
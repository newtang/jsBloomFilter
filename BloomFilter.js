var crypto = require("crypto"),
	hashes = ["sha1", "md5"],
	hashLen = hashes.length,
	bitArray,
	capacity;

function BloomFilter(c){
	capacity = c;
	bitArray = new Array(capacity);
}

function hash(str){
	var hashed = str;
	for(var i = 0; i<hashLen; ++i){
		hashed = crypto.createHash(hashes[i]).update(hashed).digest("hex");
	}
	
	//todo: change the slice amount depending on capacity.
	var position = parseInt(hashed.slice(0,2), 16) % capacity;
	return position;
}


BloomFilter.prototype.insert = function(str){
	var position = hash(str);
	bitArray[position] = true;
}

BloomFilter.prototype.contains = function(str){
	var position = hash(str);
	return !!bitArray[position];
}

module.exports = BloomFilter;
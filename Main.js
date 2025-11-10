import LRUCache from "./LRUCache.js";

let LRUcacheObject = new LRUCache(2);

LRUcacheObject.putValue(1,1);
LRUcacheObject.putValue(2,2);
let getValue1 = LRUcacheObject.getValue(1);
LRUcacheObject.putValue(3,3);
let getValue2 = LRUcacheObject.getValue(2);
LRUcacheObject.putValue(4,4);
let getValue3 = LRUcacheObject.getValue(1);


console.log(getValue1); // 1
console.log(getValue2); // -1
console.log(getValue3); // -1
console.log(LRUcacheObject.getValue(3)); // 3
console.log(LRUcacheObject.getValue(4)); // 4










import CacheNode from "./CacheNode.js";

class LRUCache {
  constructor(capacity) {
    this.head = new CacheNode(-1, -1);
    this.tail = new CacheNode(-1, -1);
    this.head.next = this.tail;
    this.tail.previous = this.head;
    this.capacity = capacity;

    // Value in trackMap is a reference to the node which has a value
    this.trackMap = new Map();
  }

  getValue = (key) => {
    if (this.trackMap.has(key)) {
      let valueToReturn = this.trackMap.get(key).value;
      this.deleteNode(this.trackMap.get(key));
      let createdNode = this.addNode(new CacheNode(key, valueToReturn));
      this.trackMap.set(key, createdNode);

      return valueToReturn;
    }
    return -1;
  };

  putValue = (key, value) => {
    if (this.trackMap.get(key)) {
    } else {
      if (this.trackMap.size == this.capacity) {
        this.trackMap.delete(this.tail.previous.key);
        this.deleteNode(this.tail.previous);
        let createdNode = this.addNode(new CacheNode(key, value));
        this.trackMap.set(key, createdNode);
      } else {
        let createdNode = this.addNode(new CacheNode(key, value));
        this.trackMap.set(key, createdNode);
      }
    }
  };

  deleteNode = (nodeTodelete) => {
    this.trackMap.delete(nodeTodelete.key);
    let nodeTodeleteNext = nodeTodelete.next;
    let nodeTodeletePrevious = nodeTodelete.previous;

    nodeTodeleteNext.previous = nodeTodeletePrevious;
    nodeTodeletePrevious.next = nodeTodeleteNext;
  };

  addNode = (newNode) => {
    let oldNode = this.head.next;

    this.head.next = newNode;
    newNode.next = oldNode;
    newNode.previous = this.head;
    oldNode.previous = newNode;

    return newNode;
  };

  testingAddNode() {
    let newNodeToAdd = new CacheNode(4, 2);

    this.addNode(newNodeToAdd);
  }

  testingDeleteNode(key) {
    this.deleteNode(this.trackMap.get(key));
  }
}

export default LRUCache;

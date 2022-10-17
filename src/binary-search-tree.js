const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.ROOT = null
  }

  root() {
    return this.ROOT
  }

  add(data) {
    function addNode(node, data) {
      if (node === null) {
        return new Node(data)
      }
      if (node.data === data) {
        return node
      }
      node.data < data ? node.right = addNode(node.right, data) : node.left = addNode(node.left, data)
      return node
    }

    this.ROOT = addNode(this.ROOT, data)
  }

  has(data) {
    function hasNode(node, data) {
      if (node === null) {
        return false
      }
      if (node.data === data) {
        return true
      }
      return node.data < data ? hasNode(node.right, data) : hasNode(node.left, data)
    }

    return hasNode(this.ROOT, data)
  }

  find(data) {
    function findNode(node, data) {
      if (node === null) {
        return null
      }
      if (node.data === data) {
        return node
      }
      return node.data < data ? findNode(node.right, data) : findNode(node.left, data)
    }

    return findNode(this.ROOT, data)
  }

  remove(data) {
    function removeNode(node, data) {
      if (node === null) {
        return null
      }
      if(node.data === data) {
        if(node.left === null && node.right === null) {
          return null
        }
        if(node.right === null) {
          node = node.left
          return node 
        }
        if(node.left === null) {
          node = node.right
          return node
        }
        let maxLeft = node.left
        for(maxLeft;  maxLeft.right !== null; ) {
          maxLeft = maxLeft.right
        }
        node.data = maxLeft.data
        node.left = removeNode( node.left, node.data)
      }
      if(node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      }
      if(node.data > data) {
        node.left = removeNode(node.left, data)
        return node
      }
    }

    this.ROOT = removeNode(this.ROOT, data)
  }

  min(node = this.ROOT) {
    for(node;  node.left !== null; ) {
      node = node.left
    }
    return node.data
  }

  max(node = this.ROOT) {
    for(node;  node.right !== null; ) {
      node = node.right
    }
    return node.data
  }

}


module.exports = {
  BinarySearchTree
};

const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root() {
    return this.root;
  }

  add(data) {
    this.root = addInside(this.root, data);

    function addInside(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.value === data) {
        return node;
      }

      if (node.value < data) {
        node.left = addInside(node.left, data);
      }
      else {
        node.right = addInside(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchInside(this.root, data);

    function searchInside(node, data) {
      if (!node) {
        return false;
      }
      if (node.value === data) {
        return true;
      }

      if (data < node.value) {
        return searchInside(node.left, data);
      }
      else return searchInside(node.right, data);
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while(node.left) {
      node = node.left;
    }
    return node.value;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while(node.right) {
      node = node.right;
    }
    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};
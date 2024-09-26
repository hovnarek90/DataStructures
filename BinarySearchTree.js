class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (!this.root) {
      this.root = new Node(data);
    } else {
      this.insertNode(this.root, data);
    }
  }

  insertNode(node, data) {
    if (data < node.data) {
      if (!node.left) {
        node.left = new Node(data);
      } else {
        return this.insertNode(node.left, data);
      }
    } else {
      if (!node.right) {
        node.right = new Node(data);
      } else {
        return this.insertNode(node.right, data);
      }
    }
  }

  search(data) {
    if (!this.root) {
      return null;
    } else {
      return this.searchNode(this.root, data);
    }
  }

  searchNode(node, data) {
    if (node.data === data) {
      return node;
    }
    if (data < node.data) {
      return this.searchNode(node.left, data);
    } else {
      return this.searchNode(node.right, data);
    }
  }

  delete(data) {
    this.root = this.deleteNode(this.root, data);
  }

  deleteNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this.deleteNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.deleteNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        let temp = this.findMin(node.right);
        node.data = temp.data;
        node.right = this.deleteNode(node.right, temp.data);
        return node;
      }
    }
  }

  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  preOrderTraversal(node) {
    if (!node) return;
    console.log(node.data);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }

  postOrderTraversal(node) {
    if (!node) return;
    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    console.log(node.data);
  }

  inOrderTraversal(node) {
    if (!node) return;
    this.inOrderTraversal(node.left);
    console.log(node.data);
    this.inOrderTraversal(node.right);
  }

  print() {
    if (!this.root) return;
    this.inOrderTraversal(this.root);
  }
}

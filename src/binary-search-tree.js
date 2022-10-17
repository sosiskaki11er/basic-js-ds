const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor() {
		this.head = null
	}

	root() {
		return this.head
	}

	add(data) {
		function addNode(el, data) {
			const newNode = new Node(data)
			if (!el) return newNode
			if (el.data > data) el.left = addNode(el.left, data)
			if (el.data < data) el.right = addNode(el.right, data)
			return el
		}
		this.head = addNode(this.head, data)
	}

	has(data) {
		function hasNode(el, data) {
			if (!el) return false
			if (el.data === data) return true
			if (el.data > data) return hasNode(el.left, data)
			if (el.data < data) return hasNode(el.right, data)
		}
		return hasNode(this.head, data)
	}

	find(data) {
		function findNode(el, data) {
			if (!el) return null
			if (el.data === data) return el
			if (el.data > data) return findNode(el.left, data)
			if (el.data < data) return findNode(el.right, data)
		}
		return findNode(this.head, data)
	}

	remove(data) {
		function removeNode(el, data) {
			if (!el) return null
			if (el.data > data) {
				el.left = removeNode(el.left, data)
				return el
			}
			if (el.data < data) {
				el.right = removeNode(el.right, data)
				return el
			}
			if (!el.left) {
				el = el.right
				return el
			}
			if (!el.right) {
				el = el.left
				return el
			}
			let minRight = el.right
			while (minRight.left) {
				minRight = minRight.left
			}
			el.data = minRight.data
			el.right = removeNode(el.right, minRight.data)

			return el
		}
		this.head = removeNode(this.head, data)
	}

	min() {
		let el = this.head
		while (el.left) el = el.left
		return el.data
	}

	max() {
		let el = this.head
		while (el.right) el = el.right
		return el.data
	}
}

module.exports = {
  BinarySearchTree
};

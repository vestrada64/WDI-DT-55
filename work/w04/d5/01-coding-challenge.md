# Coding Challenges 

Here are two coding challenges that will help you practice Ruby and will be similar to one's you may face in a technical interview. 

**The coding challenges must be done in Ruby**.

## Challenge #1: Remove Duplicates

Write a Ruby method called `removeDuplicates` that removes duplicates from an array. This method should accept an array of integers as its argument and should return a *new* array with all duplicate integers removed. The order of the elements in the returned array does not matter.

For example, 

```ruby
removeDuplicates [1,1,2,3] #=> [1,2,3]
removeDuplicates [1,6,3,9,2,4,3,9,1] #=> [1,2,3,4,6,9]
```

## Challenge #2: Find Node in BST

A Binary Search Tree is a data structure comprised of nodes and edges that connect nodes. Here is a diagram of a binary search tree:

![binary search tree](bst.png)

Some terms you should be aware of: 

* Each one of the circles in the above diagram are called **nodes**
* A node that is directly above another node is called a **parent node**
* A node that is immediately below another node is called a **child node**
* The lines that connect the nodes are called **edges**

There are some rules a Binary Search Tree obeys:

    1. The values of the nodes in the left subtree are less than the values of the parent node
    2. The value of the nodes in the right subtree are less than the values of the parent node
    3. There are no nodes with the same values

Here is a Ruby implementation of a Binary Search Tree.

```ruby
class BinaryTreeNode
	
	attr_accessor :value
	attr_reader :left, :right

	def initialize(value)
		@value = value
		@left  = nil
		@right = nil
	end

	def insert_left(value)
		@left = BinaryTreeNode.new(value)
		@left
	end

	def insert_right(value)
		@right = BinaryTreeNode.new(value)
		@right
	end

	def find_node(value, root)
		# Write code here
	end
end
```

Please write a method on the `BinaryTreeNode` class called `find_node` that accepts a value and returns `true` if a node with that value exists and `false` otherwise. This algorithm should start at the top-most node called the **root** node and should traverse the tree until it either finds a node with a given value or reaches a bottom or **leaf** node.

## Challenge #3: Invert Binary Search Tree

Invert a binary tree. 

Go from this: 

```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

to this: 

```
    4
   /   \
  7     2
 / \   / \
9   6 3   1
```

## Challenge #4: Determine if a Binary Tree is Symmetric 

Write an algorithm to determine is a binary tree is symmetric: 

This is symmetric:

```
     1
   /   \
  2     2
 / \   / \
3   4 4   3
```

This is not symmetric: 

```
    1
   / \
  2   2
   \   \
   3    3
```

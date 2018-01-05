=begin

    Task: Write a method on the `BinaryTreeNode` class called `find_node` that 
    accepts a value and returns `true` if a node with that value exists and `false` 
    otherwise. This algorithm should start at the top-most node called the **root** node 
    and should traverse the tree until it either finds a node with a given value or
    reaches a bottom or **leaf** node.

=end 

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

	def find_node(value, node)

		if node.value == value
			return true
		end

		if node.left.nil? && node.right.nil?
			return false 
		end

		if value < node.value
			return find_node(value, node.left)
		end

		if value > node.value 
			return find_node(value, node.right)
		end

	end
end

=begin 

bst is the Binary Search Tree shown below:

     4        Layer 0
   /   \
  2     7     Layer 1
 / \   / \
1   3 6   9   Layer 2

=end 

# Layer 0
bst = BinaryTreeNode.new(4) # This is the root node with a value of 4

# Layer 1
two = bst.insert_left(2)
seven = bst.insert_right(7)

# Layer 2
one = two.insert_left(1)
three = two.insert_right(3)
six = seven.insert_left(6)
nine = seven.insert_right(9)

# puts bst.inspect #=> returns the entire Binary Search Tree 

puts bst.find_node(6, bst).inspect
puts bst.find_node(12, bst).inspect
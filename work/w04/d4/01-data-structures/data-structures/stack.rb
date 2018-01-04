=begin

	Below is a simple implementation for a stack in Ruby.
	Note this is basically a wrapper for an array.

=end

class Stack 

	def initialize 
		@items ||= []
	end

	def push(val)
		@items.push(val)
	end
 
	def pop
		@items.pop
		@items
	end

	def isEmpty 
		@items.lengthi == 0
	end
end 

stk = Stack.new 
puts stk.push(45).inspect #=> bottom of stack -> [45] <- top of stack
puts stk.push(32).inspect #=> bottom of stack -> [45, 32] <- top of stack
puts stk.pop.inspect #=> bottom of stack -> [45] <- top of stack


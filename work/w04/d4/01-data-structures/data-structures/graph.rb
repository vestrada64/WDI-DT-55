=begin 

    Below is a Ruby implementation of a Graph
    data structure. 

=end

class Graph 

    def initialize
        @nodes = {}
    end

    def add_node value
        @nodes[value] = []
    end

    def addEdge from_node, to_node 
        @nodes[from_node] << to_node 
        @nodes[to_node] << from_node
        @nodes
    end 

end

=begin

Below the following graph is implemented
using the Graph class:

     :two
  /       \
:one    :three
  \       /
    :four

Note that the values for each node are Ruby
symbols

=end 

gph = Graph.new 
gph.add_node :one
gph.add_node :two 
gph.add_node :three
gph.add_node :four

# Creating four edges
gph.addEdge :one, :two 
gph.addEdge :one, :four 
gph.addEdge :four, :three 
gph.addEdge :three, :two 

# Visual output of graph
puts gph.inspect



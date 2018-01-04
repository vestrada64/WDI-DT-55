=begin 

    Simple implementation of a queue in Ruby.

=end 

class Queue 

    def initialize 
        @items = []
    end

    def enqueue
        # Write your code here
    end

    def dequeue 
        # Write your code here
    end

    def isEmpty 
        @items.length == 0
    end

end

qu = Queue.new 
puts qu.enqueue(5).inspect #=> [5]
puts qu.enqueue(67).inspect #=> [5, 67]
puts qu.dequeue #=> [67]
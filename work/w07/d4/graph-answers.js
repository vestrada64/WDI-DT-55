class Graph {
	
	constructor() {
		this.nodes = {}
	}
	
	addNode(value) {
		this.nodes[value] = [] 	
	}

	addEdge(fromNode, toNode) {
		this.nodes[fromNode].push(toNode)
		this.nodes[toNode].push(fromNode)
	}

	removeEdge(fromNode, toNode) {
		let node1 = this.nodes[fromNode].indexOf(toNode)
		let node2 = this.nodes[toNode].indexOf(fromNode)
		
		this.nodes[fromNode].splice(node1, 1)
	        this.nodes[toNode].splice(node2, 1)
	
		
	}

}

const g1 = new Graph 

g1.addNode('A')
g1.addNode('B')
g1.addNode('C')
g1.addNode('D')
g1.addNode('E')

g1.addEdge('A', 'B')
g1.addEdge('B', 'D')
g1.addEdge('B', 'C')
g1.addEdge('D', 'E')
g1.addEdge('B', 'E')

console.log(g1)

g1.removeEdge('B', 'E')

console.log(g1)

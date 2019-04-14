// note that this is a non-directional (or bi-directional) graph
class Graph {
	constructor() {
		this.adjacencyList = {}
	}

	addVertex(vertex) {
		// careful if we want to protect from overwriting
		this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2) {
		// can add error handling if desired to see if valid key
		this.adjacencyList[vertex1].push(vertex2)
		this.adjacencyList[vertex2].push(vertex1)
	}

	removeEdge(v1, v2) {
		// udemySolution used filter
		let index = this.adjacencyList[v1].indexOf(v2)
		this.adjacencyList[v1].splice(index, 1)
		index = this.adjacencyList[v2].indexOf(v1)
		this.adjacencyList[v2].splice(index, 1)
	}

	removeVertex(v) {
		// removing all edges first
		// then removing vertex
		let currentEdge;
		while (this.adjacencyList[v].length) {
			// debugger;
			currentEdge = this.adjacencyList[v][0]
			this.removeEdge(v, currentEdge)
		}
		delete this.adjacencyList[v]
	}

	BFS(startVertex) {
		let queue = []
		let result = []
		let visited = new Set([startVertex])
		queue.push(startVertex)
		while (queue.length) {
			let vertex = queue.shift()
			// if (!visited.has(vertex)){
				result.push(vertex)
				this.adjacencyList[vertex].forEach(v => {
					if (!visited.has(v)) {
						visited.add(v)
						queue.push(v)
					}
				})
			// }
		}
		return result
	}

	DFSrecursive(vertex) {
		// debugger;
		let results = []
		let visited = new Set()

		function DFS(v) {
			if (!graph.adjacencyList[v].length) {
				return;
			} else {
				results.push(v)
				visited.add(v)
				graph.adjacencyList[v].forEach(ver => {
					// console.log("visited", visited)
					if (!visited.has(ver)) {
						return graph.DFSrecursive(ver)
					} else {
						return;
					}
				})
			}
		}
		DFS(vertex)
		return results;

	}

	depthFirstRecursive(vertex, visited = new Set()) {
		// debugger;
		let result = [];
		visited.add(vertex);
		result.push(vertex);
		graph.adjacencyList[vertex].forEach(neighbor => {
			if (!visited.has(neighbor)) {
				result = result.concat(graph.depthFirstRecursive(neighbor, visited))
			}
		})
		return result;
	}

	DFSIterative(startingVertex) {
		let stack = [];
		let results = []
		let visited = new Set()
		stack.push(startingVertex)
		while (stack.length) {
			let vertex = stack.pop()
			if (!visited.has(vertex)){
				visited.add(vertex)
				results.push(vertex)
				this.adjacencyList[vertex].forEach(v => stack.push(v))
			}
		}
		return results
	}


	udemyDFSRecursive(start) {
		// debugger;

		const result = [];
		const visited = {};
		const adjacencyList = this.adjacencyList;

		(function dfs(vertex) {
			if (!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);
			adjacencyList[vertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					return dfs(neighbor)
				}
			});
		})(start);

		return result;

	}

}



let graph = new Graph()
// graph.addVertex("Seoul")
// graph.addVertex("Tokyo")
// graph.addVertex("Osaka")
// graph.addVertex("Manila")
// graph.addVertex("Sydney")
// graph.addVertex("Ho Chi Minh City")
// graph.addVertex("Jakarta")
// graph.addVertex("Bangkok")
// graph.addVertex("Shanghai")
// graph.addVertex("Beijing")
// graph.addVertex("Taipei")
// graph.addVertex("Hong Kong")

// graph.addEdge("Beijing", "Seoul")
// graph.addEdge("Beijing", "Shanghai")
// graph.addEdge("Seoul", "Tokyo")
// graph.addEdge("Seoul", "Shanghai")
// graph.addEdge("Shanghai", "Tokyo")
// graph.addEdge("Shanghai", "Taipei")
// graph.addEdge("Shanghai", "Hong Kong")
// graph.addEdge("Tokyo", "Osaka")
// graph.addEdge("Osaka", "Taipei")
// graph.addEdge("Taipei", "Hong Kong")
// graph.addEdge("Taipei", "Manila")
// graph.addEdge("Hong Kong", "Manila")
// graph.addEdge("Hong Kong", "Ho Chi Minh City")
// graph.addEdge("Hong Kong", "Bangkok")
// graph.addEdge("Manila", "Ho Chi Minh City")
// graph.addEdge("Manila", "Sydney")
// graph.addEdge("Ho Chi Minh City", "Bangkok")
// graph.addEdge("Ho Chi Minh City", "Jakarta")
// graph.addEdge("Bangkok", "Jakarta")
// graph.addEdge("Jakarta", "Sydney")
// graph.removeVertex("Sydney")


graph.addVertex("bit")
graph.addVertex("but")
graph.addVertex("put")
graph.addVertex("pot")
graph.addVertex("pog")
graph.addVertex("lot")
graph.addVertex("dog")

graph.addEdge("bit", "but")
graph.addEdge("but", "put")
graph.addEdge("put", "pot")
graph.addEdge("pot", "pog")
graph.addEdge("pog", "dog")
graph.addEdge("pot", "lot")
// graph.addEdge("E", "F")


// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addVertex("E")
// graph.addVertex("F")

// graph.addEdge("A", "B")
// graph.addEdge("A", "C")
// graph.addEdge("B", "D")
// graph.addEdge("C", "E")
// graph.addEdge("D", "E")
// graph.addEdge("D", "F")
// graph.addEdge("E", "F")

console.log(graph.adjacencyList)
// console.log("recursive", graph.depthFirstRecursive("Sydney"))
// [sydney, manila, taipei, shaghai, beijing, seoul, tokyo, osaka, hong kong, ho chi minh, bangkok, jakarta]
// console.log("iterative", graph.DFSIterative("Sydney"))
console.log(graph.udemyDFSRecursive("bit"))


// note that this is a non-directional (or bi-directional) graph
class Graph {
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(vertex){
    // careful if we want to protect from overwriting
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2){
  // can add error handling if desired to see if valid key
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1 )
  }

  removeEdge(v1, v2){
    // udemySolution used filter
    let index = this.adjacencyList[v1].indexOf(v2)
    this.adjacencyList[v1].splice(index, 1)
    index = this.adjacencyList[v2].indexOf(v1)
    this.adjacencyList[v2].splice(index, 1)
  }

  removeVertex(v){
    // removing all edges first
    // then removing vertex
    let currentEdge;
    while (this.adjacencyList[v].length){
      // debugger;
      currentEdge = this.adjacencyList[v][0]
      this.removeEdge(v, currentEdge)
    }
    delete this.adjacencyList[v]
  }
}

let graph = new Graph()
graph.addVertex("Seoul")
graph.addVertex("Tokyo")
graph.addVertex("Osaka")
graph.addVertex("Manila")
graph.addVertex("Sydney")
graph.addVertex("Ho Chi Minh City")
graph.addVertex("Jakarta")
graph.addVertex("Bangkok")
graph.addVertex("Shanghai")
graph.addVertex("Beijing")
graph.addVertex("Taipei")
graph.addVertex("Hong Kong")

graph.addEdge("Beijing", "Seoul")
graph.addEdge("Beijing", "Shanghai")
graph.addEdge("Seoul", "Tokyo")
graph.addEdge("Seoul", "Shanghai")
graph.addEdge("Shanghai", "Tokyo")
graph.addEdge("Shanghai", "Taipei")
graph.addEdge("Shanghai", "Hong Kong")
graph.addEdge("Tokyo", "Osaka")
graph.addEdge("Osaka", "Taipei")
graph.addEdge("Taipei", "Hong Kong")
graph.addEdge("Taipei", "Manila")
graph.addEdge("Hong Kong", "Manila")
graph.addEdge("Hong Kong", "Ho Chi Minh City")
graph.addEdge("Hong Kong", "Bangkok")
graph.addEdge("Manila", "Ho Chi Minh City")
graph.addEdge("Manila", "Sydney")
graph.addEdge("Ho Chi Minh City", "Bangkok")
graph.addEdge("Ho Chi Minh City", "Jakarta")
graph.addEdge("Bangkok", "Jakarta")
graph.addEdge("Jakarta", "Sydney")
graph.removeVertex("Sydney")
console.log(graph.adjacencyList)



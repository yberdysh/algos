class Queue {
  constructor(){
    this.items = []
  }

  add(item){
    this.items.push(item)
  }

  remove(){
    return this.items.shift()
  }

  peek(){
    return this.items[0]
  }

  isEmpty(){
    return this.items.length === 0
  }
}



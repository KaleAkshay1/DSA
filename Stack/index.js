class Stack {
    constructor(){
        this.data = [];
    }

    push(val) {
        this.data.push(val)
    }

    pop() {
       return this.data.pop()
    }

    top() {
        return this.data[this.data.length -1]
    }

    isEmpty() {
        return this.data.length === 0;
    }

    size() {
        return this.data.length;
    }

    display() {
        let str = "";
        for(let i of this.data){
            str += `${i} -> `
        }
        return str
    }
}

const stack = new Stack();
stack.push(1)
stack.push(2)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.top())
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.display())
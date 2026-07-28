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


function validateParanthisis(str) {
    const stack = new Stack();
    let validationObj = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    for(let i=0; i<str.length; i++){
        if(validationObj[stack.top()] === str[i]){
            stack.pop();
        }else if(!validationObj[str[i]]){
            return false;
        }else{
            stack.push(str[i]);
        }
    }
    return stack.size() === 0;
}

console.log(validateParanthisis("]"))

function nextGreaterElement(arr) {
    const stack = new Stack();
    const result = new Array(arr.length);

    for (let i = arr.length - 1; i >= 0; i--) {

        while (!stack.isEmpty() && stack.top() <= arr[i]) {
            stack.pop();
        }

        result[i] = stack.isEmpty() ? -1 : stack.top();

        stack.push(arr[i]);
    }

    return result;
}

console.log(nextGreaterElement([4, 5, 2, 10]));
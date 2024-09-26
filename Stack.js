class Stack {
    #arr;
    #size;
    constructor() {
        this.#arr = [];
        this.#size = 0;
    }

    push(num) {
        this.#arr[this.#size++] = num;
    }

    pop() {
        if (this.#size == 0) {
            throw new Error("Invalid size");
        }
        this.#size--;
        this.#arr.pop();
    }

    top() {
        return this.#arr[this.#size - 1];
    }

    getSize() {
        return this.#size;
    }

    isEmpty() {
        if (this.#size == 0) {
            return true;
        }
        return false;
    }

    print() {
        return this.#arr;
    }
}
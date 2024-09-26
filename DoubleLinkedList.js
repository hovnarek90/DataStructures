class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class List {
    #head = null;
    #tail = null;
    constructor() {}

    pushBack(data) {
        if (this.#head == null) {
            this.#head = new Node(data);
            this.#tail = this.#head;
        }
        else {
            let newNode = new Node(data);
            this.#tail.next = newNode;
            newNode.prev = this.#tail;
            this.#tail = newNode;
        }
    }

    pushFront(data) {
        if (this.#head == null) {
            this.#head = new Node(data);
            this.#tail = this.#head;
        }
        else {
            let newNode = new Node(data);
            this.#head.prev = newNode;
            newNode.next = this.#head;
            this.#head = newNode;
        }
    }

    popBack() {
        if (this.#head == null) {
           throw new Error("Cannot access pop method to null");
        }
        if (this.#head.next == null) {
            this.#head = null;
            this.#tail = this.#head;
        }
        else {
            this.#tail = this.#tail.prev;
            this.#tail.next.prev = null;
            this.#tail.next = null;
        }
    }

    popFront() {
        if (this.#head == null) {
            throw new Error("Cannot access pop method to null");
        }
         if (this.#head.next == null) {
             this.#head = null;
             this.#tail = this.#head;
        }
        else {
            this.#head = this.#head.next;
            this.#head.prev.next = null;
            this.#head.prev = null;
        }
    }

    print() {   
        let curr = this.#head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }  
    }

    getSize() {
        let size = 0;
        let curr = this.#head;
        while (curr) {
            curr = curr.next;
            size++;
        }  
        return size;
    }

    insert(pos, data) {
        if (pos > this.getSize() || pos < 0) {
            throw new Error ("Invalid position");
        }
        if (pos == 0) {
            this.pushFront(data);
        }
        else if (pos == this.getSize()) {
            this.pushBack(data);
        }
        else {
            let newNode = new Node(data);
            let step = 1;
            let curr = this.#head;
            while (step < pos) {
                curr = curr.next;
                step++;
            }
            newNode.next = curr.next;
            curr.next.prev = newNode;
            curr.next = newNode;
            newNode.prev = curr;
        }
    }

    delete(pos) {
        if (pos >= this.getSize() || pos < 0) {
            throw new Error ("Invalid position");
        }
        if (pos == 0) {
            this.popFront();
        }
        else if (pos == this.getSize() - 1) {
            this.popBack();
        }
        else {
            let step = 1;
            let curr = this.#head;
            while (step <= pos) {
                curr = curr.next;
                step++;
            }
            curr.next.prev = curr.prev;
            curr.prev.next = curr.next;
            curr.next = null;
            curr.prev = null;
        }
    }

    getLast() {
        return this.#tail.data;
    }

    getFirst() {
        return this.#head.data;
    }

    isEmpty() {
        return this.#head == null;
    }

    reverse() {
        let curr = this.#head;
        let t = this.#tail
        while(curr) {
            let tmp = curr.next;
            curr.next = curr.prev;
            curr.prev = tmp;
            curr = tmp;
        }
        this.#tail = this.#head;
        this.#head = t;
    }
}

const l = new List();
l.pushBack(5);
l.pushBack(6);
l.pushFront(7);
l.print();
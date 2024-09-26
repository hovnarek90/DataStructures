class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    pushBack(data) {
        if (this.head === null) {
            this.head = new Node(data);
        }
        else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = new Node(data);
        }
    }

    popBack() {
        if (this.head === null) {
            throw new Error("Invalid");
        }
        if (!this.head.next) {
            this.head = null;
        }
        else {
            let curr = this.head;
            while (curr.next && curr.next.next) {
                curr = curr.next;
            }
            curr.next = null;
        }
    }

    print() {   
        let curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }  
    }

    pushFront(data) {
        if (this.head === null) {
            this.head = new Node(data);
        }
        else {
            let tmp = this.head;
            this.head = new Node(data);
            this.head.next = tmp;
        }
    }

    popFront() {
        if (this.head === null) {
            throw new Error("Invalid");
        }
        else {
            this.head = this.head.next;
        }
    }

    Isempty() {
        if (this.head == null) {
            return true;
        }
        return false;
    }

    getSize() {
        if (this.head == null) {
            return 0;
        }
        let size = 1;
        let curr = this.head;
        while (curr.next) {
            size++;
            curr = curr.next;
        }
        return size;
    }

    insert(pos, data) {
        if (pos >= this.getSize() || pos < 0) {
            throw new Error ("Invalid position");
        }
        if (pos == 0) {
            this.pushFront(data);
        }
        else if (pos == this.getSize() - 1) {
            this.pushBack(data);
        }
        else {
            let newNode = new Node(data);
            let step = 1;
            let curr = this.head;
            while (step < pos) {
                curr = curr.next;
                step++;
            }
            newNode.next = curr.next;
            curr.next = newNode;
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
            let curr = this.head;
            while (curr.next && step < pos) {
                curr = curr.next;
                step++;
            }
            curr.next = curr.next.next;
        }
    }

    clear() {
        this.head = null;
    }

    getFirst() {
        if (this.head === null) {
            throw new Error("Invalid");
        }
        return this.head.data;
    }

    getLast() {
        if (this.head === null) {
            throw new Error("Invalid");
        }
        else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            return curr.data;
        }
    }
}
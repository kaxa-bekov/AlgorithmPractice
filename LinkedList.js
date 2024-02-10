

class Node{
    constructor(data){
        this.node = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    delete(data){
        let current = this.head;
        let prev = null;
        while(current && current.node !== data){
            prev = current;
            current = current.next;
        }

        if(current){

            if(prev === null){
                this.head = current.next;
            }else if(prev !== null){
                prev.next = current.next;
            }

        }
    }

    display() {
        let current = this.head;
        while(current){
            console.log(current);
            current = current.next;
        }
    }
}

const myList = new LinkedList();
myList.append('Kaxa');
myList.append('Nara');
myList.append('Busya')
myList.display();
console.log('===============');
myList.delete('Busya')
myList.display();
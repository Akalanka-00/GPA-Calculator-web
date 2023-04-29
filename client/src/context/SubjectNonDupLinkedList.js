import { statusCode } from "./DataFetchStatus";

export class Course_Modules {
  constructor(title, level, semester, credit, isGPA) {
    this.title = title;
    this.level = level;
    this.semester = semester;
    this.credit = credit;
    this.isGPA = isGPA;
  }
}

class Result{

    constructor(data, err, status){
        this.status = status;
        this.data = data;
        this.err = err;
    }
    
}

class Node {
  constructor(data) {
   this.data = data;
    this.next = null;
  }
}

export class LinkList {
  constructor() {
    this.head = null;
    this.nElement = 0;
  }

  isEmpty() {
    return this.nElement === 0;
  }

  add(data) {
   
    const newNode = new Node(data);
    
        newNode.next = this.head;
        this.head = newNode;
        this.nElement++;
        console.log(this.head.data)
        return new Result(data, null, statusCode.created);
    


  }

  remove(data){
    let current = this.head;
    let prev = current;

    if (!this.contains(data)) {
        return new Result(null,"Data Not found",statusCode.not_found);
      }

      if(this.isEmpty){
        return new Result(null,"LinkedList is empty",statusCode.empty_data_set);

      }

    while (current){
        if(current.data=== data){
            prev.next = current.next;
            this.nElement--;
        }
        prev = prev.next;
        current = current.next;
    }
  }

  contains(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  length(){
    return this.nElement;
  }

  display(){
    let current = this.head;
    if(this.isEmpty()){
        console.log("empty");
        return new Result(null,"LinkedList is empty",statusCode.empty_data_set);

      }

      while(current){
        console.log(current.data);
        current = current.next;
      }
  }
}

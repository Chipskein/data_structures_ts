import { isConstructorDeclaration } from "typescript";
import { Node } from "./doubly_linked_lists";
const colors=require('cli-color');
const pass=colors.greenBright;
const doing=colors.magentaBright;
const warn=colors.yellowBright;
const error=colors.red;
class Queue<T>{
    private size:number=0;
    private head:Node<T> | null=null
    private tail:Node<T> | null=null

    public Enqueue(data:any){
        let node=new Node(data)
        //add in end
        let tail=this.tail;
        if(!this.isEmpty()){
           if(tail){
            tail.next=node;
            node.prev=tail;
            this.tail=node;
           }
        }
        else{
            //start queue
            this.head=node;
            this.tail=node;
            this.size++
        }
    }
    public Dequeue(){
        //remove from front
        if(!this.isEmpty()){
            let head=this.head;
            if(head){
                let new_head=head.next;
                let data=head.data;
                if(new_head){
                    new_head.prev=null;
                    this.head=new_head;
                    return data;
                }
                if(this.size==1){
                    this.tail=null;
                    this.head=null;
                    this.size=0;
                    return data;
                }
            }  
    
        }
    }
    public Peek(){
        //read the front
        if(!this.isEmpty()){
            let head=this.head;
            if(head) console.log(head.data);
            
        }
    };
    public isEmpty():boolean{
        return this.size==0;
    }
    
}
export function TestQueue(){
    let queue=new Queue();

    queue.Enqueue('Person One');
    queue.Enqueue('Person Two');
    queue.Enqueue('Person Three');

    console.log(queue.Dequeue());
    console.log(queue.Dequeue());
    console.log(queue.Dequeue());
};
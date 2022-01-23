const colors=require('cli-color');
const pass=colors.greenBright;
const doing=colors.magentaBright;
const warn=colors.yellowBright;
const error=colors.red;
import {Node} from './doubly_linked_lists';
class Stack<T>{
    private size:number =0;
    private first:Node<T> | null=null;
    private last:Node<T> | null=null;
    public getSize():number{return this.size};
    public isEmpty():boolean{return this.size==0};
    public push(data:any){
        let node=new Node(data);
        if(this.isEmpty()){
            this.first=node;
            this.last=node;
            this.size++;
        }
        else{
            let trav=this?.last;
            if(trav){
                trav.next=node;
                node.prev=trav;
                this.last=node;
                this.size++;
            }
        }
    };
    public pop():any{
        if(!this.isEmpty()){
            let trav=this.last;
            if(trav?.prev){
                let data=trav?.data;
                let newlastnode=trav.prev;
                newlastnode.next=null;
                this.last=newlastnode;
                this.size--;
                return data;
            }
            else{
                this.size=0;
                return trav?.data;
            }
        }
    }
    public top():any{
        if(!this.isEmpty()){
            let trav=this.last
            if(trav&&trav?.data) return trav.data;
        }
    }
    public reset():void{
        for(let c=this.size;c>0;c--){
            console.log(`(${c})stack.pop()=>${this.pop()}`);
        };
    }
}

export function TestStack(){
    let stack=new Stack();
    stack.push('book1');
    stack.push('book2');
    stack.push('book3');
    stack.push('book4');
    stack.push('book5');
    stack.push('book6');
    stack.reset();
}
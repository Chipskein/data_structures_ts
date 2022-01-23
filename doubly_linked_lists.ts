
const colors=require('cli-color');
const pass=colors.greenBright;
const doing=colors.magentaBright;
const warn=colors.yellowBright;
const error=colors.red;

export class Node<T>{
    public data:any = null;
    public prev:Node<T> | null = null;
    public next:Node<T> | null = null;
    constructor(data:any){this.data=data;}
}
export class DoublyLinkedList<T>{

    private size:number = 0;
    private head:Node<T> | null = null;
    private tail:Node<T> | null = null;

    public isEmpty():boolean{return this.size == 0;}
    public clear():void{
        let trav=this.head;
        while(trav!=null){
            let next_node=trav.next;
            trav.next=null;
            trav.prev=null;
            trav.data=null;
            trav=next_node;
        }
        this.size=0;
        this.head=null;
        this.tail=null;
    }
    public getSize():number{return this.size};
    public addNodeLast(data:any){
        let node=new Node(data);
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
            this.size++;
        }
        else{
            let trav=this.tail;
            if(trav!=null){
                trav.next=node
                this.tail=node;
                node.prev=trav
                this.size++;
            }
        }
    }
    public addNodeFirst(data:any){
        let node=new Node(data);
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
            this.size++;
        }
        else{
            let trav=this.head;
            if(trav!=null){
                trav.prev=node;
                node.next=trav;
                this.head=node;
                this.size++;
            }
            
        }
    }
    public removeLastNode(){
        let trav=this.tail;
        if(trav?.prev){
            let last_node=trav.prev;
            this.tail=last_node;
            last_node.next=null;
            trav.prev=null;
            this.size--;
        }
        else{
            this.head=null;
            this.tail=null;
            this.size=0;
        }
    };
    public removeFirstNode(){
        let trav=this.head;
        if(trav?.next){
            let next_node=trav.next;
            this.head=next_node;
            next_node.prev=null;
            trav=null;
            this.size--;
        }
        else{
            this.head=null;
            this.tail=null;
            this.size=0;
        }

    };
    public peekFirstNode():any{return this?.head?.data};
    public peekLastNode():any{return this?.tail?.data};
    public showAllNodes(){
        let trav=this.head;
        console.log(doing("PRINTING ALL NODES..."))
        while(trav!=null){
            console.log(trav);
            trav=trav.next
        }
        console.log(pass("PRINTING ALL NODES[OK]"))
    };
}

export function TestDoublyLinkedList(){
    console.log(doing("Starting List"));
    let list=new DoublyLinkedList();

    console.log(doing("Creating Nodes by append..."));
        list.addNodeLast({value:"First Node"})
        list.addNodeLast({value:"Second Node"})
        list.addNodeLast({value:"Third Node"})
        list.addNodeLast({value:"Fourth Node"})
        list.addNodeLast({value:"Fifth Node"})
    console.log(pass("Creating Nodes by append[OK]"));    
    console.log(list);

    console.log(doing("Creating node as head nodes..."));
        list.addNodeFirst({value:"this will be a HEAD node"});
    console.log(pass("Creating node as head nodes[OK]"));    
    console.log(list)

    console.log(doing("Creating node as head nodes..."));
        list.addNodeFirst({value:"this will be another HEAD NODE"});
    console.log(pass("Creating node as head nodes[OK]"));    
    console.log(list)

    console.log(doing("Removing node tail node..."));
        list.removeLastNode();
    console.log(pass("Removing node tail node[OK]"));    
    console.log(list)

    console.log(doing("Removing node HEAD node..."));
        list.removeFirstNode();
        list.removeFirstNode();
    console.log(pass("Removing node HEAD node[OK]"));    
    console.log(list)
        list.showAllNodes();
    console.log(warn("Cleaning list"))
        list.clear();
    console.log(list);
}
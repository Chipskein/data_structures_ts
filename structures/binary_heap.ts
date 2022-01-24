const colors=require('cli-color');
const pass=colors.greenBright;
const doing=colors.magentaBright;
const warn=colors.yellowBright;
const error=colors.red;

export class BinaryHeap<T>{
    private size:number =0;
    private array:Array<any>=[];
    private min:boolean;//maxHeap by Default
    constructor(min:boolean = false){this.min=min;}
        /*  INDEX TREE    
                0
             1      2
           3  4   5  6
            NODE TREE
                100
            90      95
          88  87   90  30  

        index=parent index
        left_child=2*index+1
        right_chield=2*index+2
        getParent(index-1)/2
        heap invariant= the children node need be or equal or less than the parent node
        */
    public isEmpty(){return this.size==0;}
    public insertNode(data:any){
        //insert node in the Binary tree and verify heap invariant
        //if index is diferent from 0 and is empty the Tree is empty
        if(this.isEmpty()){
            this.array[0]=data;
            this.size++;
        }
        else{
            this.array[this.size]=data
            this.size++

            let index=this.size-1;
            let convert:any=((index-1)/2)
            let parent_index=parseInt(convert);
            let parent=this.array[parent_index]
            let child=this.array[index];
            if(!this.min){
                while(this.array[parent_index]<this.array[index]){
                    this.array[parent_index]=child;
                    this.array[index]=parent;
                    console.log("Swap:"+parent+"<->"+child)
                    index=parent_index;
                    convert=((index-1)/2)
                    parent_index=parseInt(convert);
                    parent=this.array[parent_index]
                    child=this.array[index];
                }
            }
            else{
                while(this.array[parent_index]>this.array[index]){
                    this.array[parent_index]=child;
                    this.array[index]=parent;
                    console.log("Swap:"+parent+"<->"+child)
                    index=parent_index;
                    convert=((index-1)/2)
                    parent_index=parseInt(convert);
                    parent=this.array[parent_index]
                    child=this.array[index];
                }
            }
        }
    }
    public removeNode(index:number){
        //remove a node from binary tree and ajust heap invariant
    }
    public pull(){
        //remove root node; and set a new root 
    }
    public getTop(){
        if(!this.isEmpty()) return this.array[0];
    }
    public peekNode(index:number){
        //get first node from tree
    }
    public ChangeHeapType(){
        //change priorite //default is max
    }
    public getHeapType(){return this.min ? "MinHeap":"MaxHeap";}

    public getTree(){return this.array;}
}
export function TestBinaryHeap(){
    console.log(doing("Creating Heaps..."));
        let maxheap=new BinaryHeap();
        let minheap=new BinaryHeap(true);
    console.log(pass("Creating Heaps[OK]"));
    console.log(doing("Inserting Nodes on both heaps..."));
    let maxpre_order=[];
    let minpre_order=[];
        for(let c=1;c<=10;c++){
            let number=Math.ceil(Math.random()*200);
            let number2=Math.ceil(Math.random()*200);
            maxpre_order.push(number);
            maxheap.insertNode(number);
            minpre_order.push(number2);
            minheap.insertNode(number2);
        }
    console.log(pass("Inserting Nodes on both heaps[OK]"));
    
    console.log("Pre Order:",maxheap.getHeapType(),maxpre_order);
    console.log("Post Order",maxheap.getHeapType(),maxheap.getTree());

    console.log("Pre Order:",minheap.getHeapType(),minpre_order);
    console.log("Post Order",minheap.getHeapType(),minheap.getTree());


}
console.clear();
TestBinaryHeap();





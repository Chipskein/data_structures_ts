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
            let convert:any=((index-1)/2)//BUG Type
            let parent_index=parseInt(convert);
            if(!this.min){
                while(this.array[parent_index]<this.array[index]){
                    this.swap(parent_index,index)
                    index=parent_index;
                    convert=((index-1)/2)
                    parent_index=parseInt(convert);
                }
            }
            else{
                while(this.array[parent_index]>this.array[index]){
                    this.swap(parent_index,index)
                    index=parent_index;
                    convert=((index-1)/2)
                    parent_index=parseInt(convert);
                }
            }
        }
    }
    public removeNode(index:number){
        //remove a node from binary tree and ajust heap invariant
    }
    public swap(index:number,index2:number){
        if(!this.isEmpty()&&index>=0&&index<this.size&&index2>=0&&index2<this.size){
            console.log(warn("      Swap:"+this.array[index]+"<->"+this.array[index2]))
            let index_value=this.array[index];
            let index2_value=this.array[index2];
            this.array[index]=index2_value;
            this.array[index2]=index_value;
            return 1;
        }
        else return -1
    };
    public poll(){
        //remove root node; and set a new root 
        //swap root to newroot
        this.swap(0,this.size-1)
        //delete oldroot
        let oldroot=this.array.pop();
        this.size--;
        //now validate heap property
        let index=0;
        let leftindex=2*index+1;
        let rightindex=2*index+2;
        if(!this.min){
            while(this.array[index]<this.array[leftindex]||this.array[index]<this.array[rightindex]){
                if(this.array[index]<this.array[leftindex]&&this.array[leftindex]>this.array[rightindex]) {
                    this.swap(index,leftindex);
                    index=leftindex;
                }
                if(this.array[index]<this.array[rightindex]&&this.array[leftindex]<this.array[rightindex]){
                    this.swap(index,rightindex);
                    index=rightindex;
                }
                leftindex=2*index+1;
                rightindex=2*index+2
            }
        }
        else{
            while(this.array[index]>this.array[leftindex]||this.array[index]>this.array[rightindex]){
                if(this.array[index]>this.array[leftindex]&&this.array[leftindex]<this.array[rightindex]) {
                    this.swap(index,leftindex);
                    index=leftindex;
                }
                if(this.array[index]>this.array[rightindex]&&this.array[leftindex]>this.array[rightindex]){
                    this.swap(index,rightindex);
                    index=rightindex;
                }
                leftindex=2*index+1;
                rightindex=2*index+2
            }
        }
        return oldroot;
    }
    public getTop(){
        if(!this.isEmpty()) return this.array[0];
    }
    public peekNode(index:number){
        if(!this.isEmpty()&&index<this.size&&index>=0) return this.array[index];
    }
    public ChangeHeapType(){
        if(!this.min){
            this.min=true;
            let old_array=this.array;
            this.array=[];
            this.size=0;
            old_array.forEach(element => {
                this.insertNode(element);
            });
        }
        else{
            this.min=false;
            //convert to MaxHeap
            let old_array=this.array;
            this.array=[];
            this.size=0;
            old_array.forEach(element => {
                this.insertNode(element);
            });
        }
    }
    public getHeapType(){return this.min ? "MinHeap":"MaxHeap";}

    public getTree(){return this.array;}
    public clearTree(){this.array=[];}
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

    console.log("Pre Insert Order:",maxheap.getHeapType(),maxpre_order);
    console.log("Sort Order",maxheap.getHeapType(),maxheap.getTree());

    console.log("Pre Insert Order:",minheap.getHeapType(),minpre_order);
    console.log("Sort Order",minheap.getHeapType(),minheap.getTree());

    console.log(pass("Clearing Tree"));
        minheap.clearTree();
    console.log("Cleared:",minheap.getHeapType(),minheap.getTree())
    
    console.log(doing("Removing Root Node..."));
    console.log(pass("Removed:"),maxheap.getHeapType(),maxheap.poll());

    /*
        console.log("Removing Root Node...")
        console.log("Removed:",minheap.poll());
    */
    console.log(doing("Changing Heap Type..."))
    console.log("Pre Changing order:",maxheap.getHeapType(),maxheap.getTree());
        maxheap.ChangeHeapType();
    console.log("After Changing",maxheap.getHeapType(),maxheap.getTree());
    console.log(pass("Changing Heap Type[OK]"))
}
TestBinaryHeap();





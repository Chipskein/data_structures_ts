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
        if(this.isEmpty()){
            this.array[0]=data;
            this.size++;
        }
        else{
            this.array[this.size]=data
            this.size++
            this.heapfy_up(this.size-1)
        }
    }
    public removeNode(index:number){
        //remove a node from binary tree and ajust heap invariant
        if(!this.isEmpty()&&index>=0&&index<this.size){
            this.swap(index,this.size-1);
            let removed_node=this.array.pop();
            this.size--;
            this.heapfy_down(index);            
            return removed_node;
        }
    }
    public heapfy_up(index:number){
        //used in insert
        let parent_index=Math.floor((index-1)/2);
        let conditional= !this.min ? this.array[parent_index]<this.array[index]:this.array[parent_index]>this.array[index];
        while(conditional){
            this.swap(parent_index,index)
            index=parent_index;
            parent_index=Math.floor((index-1)/2);
            conditional= !this.min ? this.array[parent_index]<this.array[index]:this.array[parent_index]>this.array[index];
        }
    
    }
    public heapfy_down(index:number){
        //used on removal
        let leftindex=2*index+1;
        let rightindex=2*index+2;
        let while_conditional= !this.min ? this.array[index]<this.array[leftindex]||this.array[index]<this.array[rightindex]:this.array[index]>this.array[leftindex]||this.array[index]>this.array[rightindex]
        let conditional_left = !this.min ? this.array[index]<this.array[leftindex]&&this.array[leftindex]>this.array[rightindex]:this.array[index]>this.array[leftindex]&&this.array[leftindex]<this.array[rightindex]
        let conditional_right = !this.min ? this.array[index]<this.array[rightindex]&&this.array[leftindex]<this.array[rightindex]:this.array[index]>this.array[rightindex]&&this.array[leftindex]>this.array[rightindex]
        while(while_conditional){
            if(conditional_left) {
                this.swap(index,leftindex);
                index=leftindex;
            }
            if(conditional_right){
                this.swap(index,rightindex);
                index=rightindex;
            }
            leftindex=2*index+1;
            rightindex=2*index+2
            while_conditional= !this.min ? this.array[index]<this.array[leftindex]||this.array[index]<this.array[rightindex]:this.array[index]>this.array[leftindex]||this.array[index]>this.array[rightindex]
            conditional_left = !this.min ? this.array[index]<this.array[leftindex]&&this.array[leftindex]>this.array[rightindex]:this.array[index]>this.array[leftindex]&&this.array[leftindex]<this.array[rightindex]
            conditional_right = !this.min ? this.array[index]<this.array[rightindex]&&this.array[leftindex]<this.array[rightindex]:this.array[index]>this.array[rightindex]&&this.array[leftindex]>this.array[rightindex]
        }
        
      
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
        else throw new Error("Swap failure")
        
    };
    public poll(){
        let removed_nod=this.removeNode(0);
        return removed_nod;
    }
    public getTop(){if(!this.isEmpty()) return this.array[0];}
    public peekNode(index:number){if(!this.isEmpty()&&index<this.size&&index>=0) return this.array[index];}
    public ChangeHeapType(){
        //cached old array
        let before_conversion=this.array;
        //set converted  
        // min->max=true->false
        // max->min=false->true      
        !this.min ? this.min=true:this.min=false;
        //clean array
        this.array=[];
        this.size=0;
        before_conversion.forEach(element=>{
            this.insertNode(element);
        })
    }
    public getHeapType(){return this.min ? "MinHeap":"MaxHeap";}
    public getTree(){return this.array;}
    public clearTree(){this.array=[];this.size=0;}
}
export function TestBinaryHeap(){
    console.log(doing("Creating Heaps..."));
        let maxheap=new BinaryHeap();
    console.log(pass("Creating Heaps[OK]"));
    console.log(warn("---------------------------------------------------"))
    console.log(doing("Inserting Nodes on both heaps..."));
    let maxpre_order=[]//[ 167,159,41,168,61,184,188,158,156,17];
    for(let c=0;c<=10;c++){
        let number=Math.ceil(Math.random()*300);
        maxpre_order.push(number);
        maxheap.insertNode(number);
    }
    console.log(pass("Inserting Nodes on both heaps[OK]"));
    console.log("Insert Order:",maxheap.getHeapType(),maxpre_order);
    console.log("Sorted Order",maxheap.getHeapType(),maxheap.getTree());
    console.log(warn("---------------------------------------------------"))
    console.log("Removing Root Node...")
    console.log("Removed:",maxheap.poll());
    console.log("New heap",maxheap.getHeapType(),maxheap.getTree())
    console.log(warn("---------------------------------------------------"))
    console.log("Removing Node at 4 position...")
    console.log("Removed:",maxheap.removeNode(4));
    console.log("New heap",maxheap.getHeapType(),maxheap.getTree())
    console.log(warn("---------------------------------------------------"))
    console.log(doing("Changing Heap Type..."))
    console.log("Pre Changing order:",maxheap.getHeapType(),maxheap.getTree());
        maxheap.ChangeHeapType();
    console.log("After Changing",maxheap.getHeapType(),maxheap.getTree());
    console.log(pass("Changing Heap Type[OK]"))
    console.log(warn("---------------------------------------------------"))
    console.log(doing("Changing Heap Type..."))
    console.log("Pre Changing order:",maxheap.getHeapType(),maxheap.getTree());
        maxheap.ChangeHeapType();
    console.log("After Changing",maxheap.getHeapType(),maxheap.getTree());
    console.log(pass("Changing Heap Type[OK]"))
    console.log(warn("---------------------------------------------------"))
    console.log(pass("Clearing Tree"));
        maxheap.clearTree();
    console.log("Cleared:",maxheap.getHeapType(),maxheap.getTree())
}





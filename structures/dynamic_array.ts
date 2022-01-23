const colors=require('cli-color');
const pass=colors.greenBright;
const doing=colors.magentaBright;
const warn=colors.yellowBright;
const error=colors.red;
export class DynamicArray {

    private  arr:Array<number> =[];
    private  size:number=0;
    private  capacity:number=0;
    public add(elem:number) :void{
        if(this.size<this.capacity||this.capacity==0){         
                this.arr[this.size]=elem;
                this.size++;
                if(this.capacity==0) this.capacity=2
        }
        else{
            //create new array
            let new_array:Array<number>=[];
            //copy static array to new_array
            for(let c=0;c<this.size;c++){
                new_array[c]=this.arr[c];                
            };
            //set last element
            new_array[this.size]=elem;
            this.capacity*=2;//Duplicate capacity
            this.size++//ajust size
            this.arr=new_array
            //end
        }
    
    }
    public clear():void{
        for(let c=this.capacity;c>=0;c--){
            this.arr.splice(c,1);
        }
        this.capacity=0;
        this.size=0;
    }
    public getSize():number {return this.size}
    public isEmpty():boolean {return this.getSize()==0}
    public getFromIndex(index:number):number{return this.arr[index]}
    public setInIndex(index:number,elem:number):void{
        if(this.size>index) this.arr[index]=elem;
        if(index>=this.size&&index<this.capacity){
           this.size=index+1
           this.arr[index]=elem;
        }
        if(index>=this.capacity){
            //reallocate array
            let new_array:Array<number>=[];
            //copy static array to new_array
            for(let c=0;c<this.size;c++){
                new_array[c]=this.arr[c];                
            };
            //set last element
            new_array[index]=elem;
            this.capacity=(index+1)*2;//Duplicate capacity
            
            this.size=index+1//ajust size
            this.arr=new_array
            //end

        }
      
    }
    public remoteAt(index:number):number{
        if(index>=this.size){
            console.log(error('ERROR:INVALID INDEX'));
            return -1;
        }
        else{
            let removedval=this.arr[index];
            let new_Array:Array<number>=[];
            for(let c=0,c2=0;c<this.size;c++,c2++){
                if(index==c) c2--
                if(c2>=0) new_Array[c2]=this.arr[c];
                else new_Array=[];
            }
            this.arr=new_Array;
            this.size--
            return removedval;
        }
    }
}
export function TestDynamicArray(){
    console.log(doing("Creating Array..."))
        let arr=new DynamicArray();
    console.log(pass("Creating Array[OK]"))
    console.log(doing("ADDING ELEMENTS..."))
        console.log("   1.",arr);
        arr.add(1);
        console.log("   2.",arr);
        arr.add(1);
        console.log("   3.",arr);
        arr.add(1);
        console.log("   4.",arr);
    console.log(pass("ADDING ELEMENTS[OK]"))
    
    console.log(pass("Clearing Array..."));
        arr.clear();
        console.log("   5.",arr)
    console.log(doing("ADDING ELEMENTS..."))
        arr.add(1);
        console.log("   6.",arr);
        arr.add(1);
        console.log("   7.",arr);
        arr.add(1);
        console.log("   8.",arr);
        arr.add(1);
        console.log("   9.",arr);
        arr.add(1);
        console.log("   10.",arr);
    console.log(pass("ADDING ELEMENTS[OK]"))

    console.log(doing("TESTING SETTING INDEX..."));
        console.log(warn("Setting Index 3"))
        arr.setInIndex(3,0);
        console.log("   11.",arr);

        console.log(warn("Setting Index 5(non-existent)"))
        arr.setInIndex(5,0);
        console.log("   12.",arr);

        console.log(warn("Setting Index 7(non-existent) and less than capacity"))
        arr.setInIndex(7,0);
        console.log("   13.",arr);

        console.log(warn("Setting Index 9(non-existent) and overflow capacity"))
        arr.setInIndex(9,0);
        console.log("   14.",arr);

        console.log(warn("Setting Index 22(non-existent) and overflow capacity"))
        arr.setInIndex(22,0);
        console.log("   15.",arr);
    console.log(pass("TESTING SETTING INDEX[OK]"));

    console.log(pass("Clearing Array..."));
        arr.clear();
        console.log("   16.",arr)
        console.log(doing("ADDING ELEMENTS..."))
        console.log("   17.",arr);
        arr.add(1);
        console.log("   18.",arr);
        arr.add(1);
        console.log("   19.",arr);
        arr.add(1);
        console.log("   20.",arr);
        arr.add(1);
        console.log("   21.",arr);
    console.log(pass("ADDING ELEMENTS[OK]"))

    console.log(doing("DELETING ELEMENTS..."))
        console.log(warn("Removing index 200 out of range"));
        arr.remoteAt(200);
        console.log(warn("Removing index 2"));
        arr.remoteAt(2);
        console.log("   22.",arr);
        console.log(warn("Removing index 3 out of range"));
        arr.remoteAt(3);
        
        console.log(warn("Removing index 1 "));
        arr.remoteAt(1);
        console.log("   23.",arr);
        console.log(warn("Removing index 1 again"));
        arr.remoteAt(1);
        console.log("   24.",arr);

        console.log(warn("Removing index 0 "));
        arr.remoteAt(0);
        console.log("   25.",arr);
        
    console.log(pass('DELETING ELEMENTS[OK]'))
}




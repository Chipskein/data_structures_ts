export class DynamicArray {

    private  arr:Array<number> =[];
    private  size:number=0;//user lenght
    private  capacity:number=0;//Max Array Size
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
}
export function TestDynamicArray(){
    console.log("Creating Array...")
        let arr=new DynamicArray();
    console.log("Creating Array[OK]")

    console.log("ADDING ELEMENTS...")
        console.log("1.",arr);
        arr.add(1);
        console.log("2.",arr);
        arr.add(1);
        console.log("3.",arr);
        arr.add(1);
        console.log("4.",arr);
    console.log("ADDING ELEMENTS[OK]")
    console.log("Clearing Array...");
        arr.clear();
        console.log("5.",arr)
    console.log("ADDING ELEMENTS...")
        arr.add(1);
        console.log("6.",arr);
        arr.add(1);
        console.log("7.",arr);
        arr.add(1);
        console.log("8.",arr);
        arr.add(1);
        console.log("9.",arr);
        arr.add(1);
        console.log("10.",arr);
    console.log("ADDING ELEMENTS[OK]")

    console.log("TESTING SETTING INDEX...");
        console.log("Setting Index 3")
        arr.setInIndex(3,0);
        console.log("11.",arr);

        console.log("Setting Index 5(non-existent)")
        arr.setInIndex(5,0);
        console.log("12.",arr);

        console.log("Setting Index 7(non-existent) and less than capacity")
        arr.setInIndex(7,0);
        console.log("13.",arr);

        console.log("Setting Index 9(non-existent) and overflow capacity")
        arr.setInIndex(9,0);
        console.log("14.",arr);

        console.log("Setting Index 22(non-existent) and overflow capacity")
        arr.setInIndex(22,0);
        console.log("15.",arr);
    console.log("TESTING SETTING INDEX[OK]");
}




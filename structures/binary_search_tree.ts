const colors=require('cli-color');
const pass=colors.greenBright;
const doing=colors.magentaBright;
const warn=colors.yellowBright;
const error=colors.red;
class node<T>{
    public data:number;
    public parent:node<T>| null=null;
    public left:node<T> | null=null;
    public right:node<T> | null=null;
    constructor(data:number){
        this.data=data;
    }
}
class BinarySearchTree<T>{
    private size=0
    private root:any;
    public isEmpty(){return this.size==0}
    public addElement(data:number){
        if(!this.isEmpty()){
            let isNodeAdded=this.add_recursive(data,this.root)
            this.size++
        }
        else{
            this.root=new node(data)
            this.root.parent=this.root;
            this.size++
        }
    }
    public add_recursive(data:number,parent:any):any{
        let child=new node(data);
        child.parent=parent;
        
        if(parent.data>child.data&&parent.left==null){
            parent.left=child
            return 1
        }
        if(parent.data<child.data&&parent.right==null){
            parent.right=child
            return 1
        }
        if(parent.data>data) return this.add_recursive(data,parent.left);
        if(parent.data<data) return this.add_recursive(data,parent.right);
    }
    public removeElement(data:number,root = this.root){
        let nodeExists=this.find(data,root);
        console.log(nodeExists)
        if(nodeExists!=-1) console.log("node found")
        else return -1 
    }
    public find(data:number,root = this.root):any{
        if(root!=null){
            if(data==root.data) return root
            else {
                if(root.left==null&&root.right==null) return -1
                if(data<root.data) return this.find(data,root.left);
                if(data>root.data) return this.find(data,root.right); 
            }
        }
    }
}
export function TestBinarySearchTree(){
    console.clear();
    console.log(warn("---------------------------------------------------"))
    console.log(doing("Creating Binary Search Tree..."));
        let bst=new BinarySearchTree();
    console.log(pass("Creating Binary Search Tree[OK]"));
    console.log(warn("---------------------------------------------------"))
    console.log(doing("Adding elements to BST..."));
        let cached_numbers=[];
        for(let c=10;c>0;c--){
            let number=Math.round(Math.random()*300)
            cached_numbers.push(number);
            bst.addElement(number);    
        }
    console.log(pass("Adding elements to BST[OK]"));
    console.log(warn("---------------------------------------------------"))
    console.log(cached_numbers)
    console.log(warn("PRINT ELEMENTS FROM BST..."));
        cached_numbers.forEach(number => {
            console.log(bst.find(number));
        });
    console.log(pass("PRINT ELEMENTS FROM BST[OK]"));

}
TestBinarySearchTree()




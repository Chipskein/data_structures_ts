const colors=require('cli-color');
const pass=colors.greenBright;
const doing=colors.magentaBright;
const warn=colors.yellowBright;
const error=colors.red;
class node<T>{
    public data:number;
    public left:node<T> | null=null;
    public right:node<T> | null=null;
    constructor(data:number){
        this.data=data;
    }
}
class BinarySearchTree<T>{
    private size=0
    private root:node<T> | null=null;
    public isEmpty(){return this.size==0}
    public addElement(data:number){
        this.root=this.recursive_Add(this.root,data)
        this.size++;
    }
    private recursive_Add(newnode:any,data:number){
        if(newnode==null) newnode=new node(data);
        else{
            if(newnode.data>data) newnode.left=this.recursive_Add(newnode.left,data)
            if(newnode.data<data) newnode.right=this.recursive_Add(newnode.right,data) 
        }
        return newnode
    }
    public removeElement(data:number,root = this.root,parent = this.root){
 	 if(root!=null&&parent!=null){
	 	if(data==root.data){
			console.log("Found Node to Delete");
			//if is a leef node;
			if(root.left==null&&root.right==null){
				if(parent?.left?.data==root.data){
					parent.left=null;
				}
				else{
				  	parent.right=null;
				}
				console.log("Removed",data);
			}
		}

		else{
            if(root.left==null&&root.right==null){
                console.log("Didn't found node do delete");
                return -1;
            }
			if(data<root.data) this.removeElement(data,root.left,root);
			if(data>root.data) this.removeElement(data,root.right,root);	
		}
	 }
    }
    public find(data:number,root = this.root){
        if(root!=null){
            if(data==root.data) console.log("FOUND",data)
            else {
                if(root.left==null&&root.right==null) console.log("DIDN'T FIND",data);
                if(data<root.data) this.find(data,root.left);
                if(data>root.data) this.find(data,root.right); 
               
            }
        }
    }
    public replace(data:number,newdata:number){}
}
export function TestBinarySearchTree(){
    console.clear();
    console.log(warn("---------------------------------------------------"))
    console.log(doing("Creating Binary Search Tree..."));
        let bst=new BinarySearchTree();
    console.log(pass("Creating Binary Search Tree[OK]"));
    console.log(warn("---------------------------------------------------"))
    console.log(doing("Adding elements to BST..."));
        let elements=[74,26,100,20,50,90,200];
        elements.forEach(element => {
            bst.addElement(element);
        });
    console.log(pass("Adding elements to BST[OK]"));
    console.log(warn("---------------------------------------------------"))
    console.log(bst);
    bst.removeElement(20);
}
TestBinarySearchTree()




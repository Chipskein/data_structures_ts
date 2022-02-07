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
    private add_recursive(data:number,parent:any):any{
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
    public remove(data:number,root = this.root){
        let node=this.find(data,root);
        if(node!=false&&node!=undefined){
            console.log(pass("Node",node.data,"found"));
            this.size--;
            let parent=node.parent
            //leef node case
            if(node.left==null&&node.right==null){
                //leef node in right
                if(parent.data<node.data){
                    parent.right=null;
                    node.parent=null;
                    console.log("Removed:",node.data)
                    return true
                }
                //leef node in left
                if(parent.data>node.data){
                    parent.left=null;
                    node.parent=null;
                    console.log("Removed:",node.data)
                    return true
                }
            }
            //one child case
            if(node.left==null&&node.right!==null||node.left!=null&&node.right==null){
                
                if(node.left==null&&node.right!==null){
                    //one child right
                    let child=node.right;
                    if(parent.data>node.data){
                        //node a esquerda
                        parent.left=child;
                        child.parent=parent;
                        node.parent=null;
                        node.right=null;
                        console.log("Removido",node.data)
                        return true
                    }                    
                    if(parent.data<node.data){
                        //node a direita
                        parent.right=child;
                        child.parent=parent;
                        node.parent=null;
                        node.right=null;
                        console.log("Removido",node.data)
                        return true
                    }                    

                }
                if(node.left!=null&&node.right==null){
                    //one child left
                    let child=node.left;
                    if(parent.data>node.data){
                        //node a esquerda
                        parent.left=child;
                        child.parent=parent;
                        node.parent=null;
                        node.left=null;
                        console.log("Removido",node.data)
                        return true
                    }                    
                    if(parent.data<node.data){
                        //node a direita
                        parent.right=child;
                        child.parent=parent;
                        node.parent=null;
                        node.left=null;
                        console.log("Removido",node.data)
                        return true
                    }  
                }
            
            }
            //two child case
            if(node.left!=null&&node.right!=null){
                console.log("Two Child case")
                let olddata=node.data;
                let right=node.right;
                //find min node
                let min_node=this.findMinInRightTree(right);
                node.data=min_node.data;
                //removing min_node
                let min_node_parent=min_node.parent;
                min_node_parent.left=null
                console.log("Removed:",olddata,"NewNode:",min_node.data)
                return true
            }

        }
        else{
            console.log(error("Node not found"))
            return false
        }
    }
    private findMinInRightTree(node:any):any{
        if(node.left!=null) return this.findMinInRightTree(node.left)
        else return node;
    }
    public find(data:number,root = this.root):any{
        if(root!=null){
            if(data==root?.data) return root
            else {
                if(root.left==null&&root.right==null) return false
                if(data<root.data) return this.find(data,root.left);
                if(data>root.data) return this.find(data,root.right); 
            }
        }
        else false
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
    let cached_numbers=[74,26,100,20,50,90,200,95,199,300,4,180,185,60,40,30,45];
    cached_numbers.forEach(number=>{
        bst.addElement(number);
    })
    /*  
    let cached_numbers=[];
        for(let c=10;c>0;c--){
            let number=Math.round(Math.random()*300)
            cached_numbers.push(number);
            bst.addElement(number);    
        }
    */
    console.log(pass("Adding elements to BST[OK]"));
    console.log(warn("---------------------------------------------------"))
    console.log(warn("PRINT ELEMENTS FROM BST..."));
    cached_numbers.forEach(number => {
            let node=bst.find(number);
            console.log("Node:",node?.data,"Parent:",node?.parent?.data,"Left:",node?.left?.data,"Right:",node?.right?.data)
        }
    );
    console.log(pass("PRINT ELEMENTS FROM BST[OK]"));
    bst.remove(cached_numbers[Math.round(Math.random()*(cached_numbers.length-1))])
}




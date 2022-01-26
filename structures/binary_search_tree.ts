const colors=require('cli-color');
const pass=colors.greenBright;
const doing=colors.magentaBright;
const warn=colors.yellowBright;
const error=colors.red;
class BinarySearchTree<T>{
    
}
export function TestBinarySearchTree(){
    console.log(warn("---------------------------------------------------"))
    console.log(doing("Creating Binary Search Tree..."));
        let bst=new BinarySearchTree();
    console.log(pass("Creating Binary Search Tree[OK]"));
    console.log(warn("---------------------------------------------------"))

}
TestBinarySearchTree()




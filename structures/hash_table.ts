import { setConstantValue } from "typescript";

const colors=require('cli-color');
const pass=colors.greenBright;
const doing=colors.magentaBright;
const warn=colors.yellowBright;
const error=colors.red;

class HashTable<T>{
    array:any=[]
    size:number=0
    addElement(str:string){
        this.size++
        let key=this.hash(str);
        this.array[key]=str;
    };
    RemoveElement(){};
    SearchElement(){};
    hash(str:string){
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            var character = str.charCodeAt(i);
            hash = ((hash<<5)-hash)+character;
            hash = hash & hash; // Convert to 32bit integer
            hash=Math.abs(hash)
        }
        let key=   hash % (this.size-1)
        console.log(key)
        return key;
    }
    PrintTable(){
        console.log(this.array)
    }
}
export function TestHashTable(){
    let table=new HashTable()
    table.addElement("monkey")
    table.addElement("faksfçlãskfçlasfqa")
    table.addElement("fasfasfa")
    table.addElement("fasfasfasfas")
    table.addElement("mosy")
    table.addElement("maskey")
    table.addElement("m4124key")
    table.addElement("mvdsy")
    table.addElement("mdaSey")
    table.addElement("mDA   ey")
    table.addElement("monSFA")
    table.PrintTable()
}
TestHashTable();




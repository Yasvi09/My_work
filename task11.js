// write node js script to cre a class name person by assigning name and age in from of members . create one function named elder which returuns elder person object.detils of elder person should be printed in console as well as in file.
 
class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    elder(p){
        if(this.age>p.age){
            return this;
        }
        else{
            return p
        }
    }
}
var p1=new person("xyz",23)
var p2=new person("abc",93)
var p3=p1.elder(p2)
console.log(p3)
var ps=require("fs")
ps.writeFileSync("d2.txt",JSON.stringify(p3))




Array.prototype.customReduce=function(func){
    let a=0;
    for(let i=0;i<this.length;i++){
        func(a=a+this[i])
    }
    return a;
}

let array=[1,4,34,67,23];
let result = array.customReduce((current,item)=>current+item);
console.log(result)
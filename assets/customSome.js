

Array.prototype.customSome=function(func){
    for(let i=0;i<this.length;i++){
        if(func(this[i])){
            return true
        }
    }
    return false;
}

let someArr=[10,22,33,44];

console.log(someArr.customSome(item=>item%11==0))
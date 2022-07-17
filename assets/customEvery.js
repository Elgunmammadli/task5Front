
Array.prototype.customEvery=function(func){
    for(let i=0;i<this.length;i++){
        if(!func(this[i])){
            return false
        }
    }
    return true;
}

let everyArr=[11,22,39,44];

console.log(everyArr.customEvery(item=>item%11==0))
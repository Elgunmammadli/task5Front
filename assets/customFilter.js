
Array.prototype.customFilter=function(func){

    let filterArr=[];

    for(let i=0;i<this.length;i++){
        if(func(this[i])){
            filterArr.push(this[i]);
        }

    }
    return filterArr;
}

let fArr=[12,34,23,17];

console.log(fArr.customFilter(item=>item>=18))
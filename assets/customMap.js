let arr=[1,2,3];

Array.prototype.customMap=function(func) {
    const result = [];
    for (let index = 0; index < this.length; index++) {
        result.push(func(this[index]));
    }
    return result;

}
console.log(arr.customMap( function(element){
    return element*3;
 } ))

 
// second 
/*
function customMap2(array,func){
   let newArray=[];
   for(let item of array){
     newArray.push(func(item))
   }
   return newArray;
}


console.log(customMap2(arr,function(element){
    return element*2;
}))
*/

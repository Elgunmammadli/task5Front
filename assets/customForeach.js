
Array.prototype.customForeach = function (func)
{
    for (let i = 0; i < this.length; i++) {
        if (func(this[i]))
        {
            console.log(this[i]);                
        }
    }
}

let foreachArr = [1, 2, 3, 4, 5, 6, 7];


foreachArr.customForeach(item=>item%2==0)

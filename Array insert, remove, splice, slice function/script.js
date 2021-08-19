const myArray = [1,23,45,6,7,8,1,4,56,78,90]
const myArraySlice = myArray.slice(3,10)
console.log(myArraySlice)
console.log(myArray)

// remove array element  and effect main array 
const remuvalArray = myArray.splice(2,4)
console.log(remuvalArray)
console.log(myArray)


// insert array element and effect main array 
const insertArray = myArray.splice(2,0,111,222,333,444,555,666)
console.log(insertArray) //this is remove result but we don't remove element we insert element 
console.log(myArray) // this is orginial array and we insert new array element 

 
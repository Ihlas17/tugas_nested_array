function panggilNestedArray(value){
    // tulis jawabanmu disini
let arr = []
let arr2 = ''
let arr3 = []
let arr4 = []
value.push(arr)
for(let i=0; i<value.length; i++){
    for(let j=0; j<value.length; j++){
        arr2+=value[j][i]
        arr2+=' '
    }
} arr3 = arr2.split('undefined')
for(let k=0; k<arr3.length; k++){
    arr4.push([arr3[k]])
} arr4.pop()
return arr4
   }
//    [
//     '1 Mark Zuckerberg Facebook ',
//     ' 2 Elon Musk Tesla ',
//     ' 3 Bill Gates Microsoft ',
//     ' 4 Steve Jobs Apple ',
//     ' '
//   ]
   
   var nestedArray = [
      [1,2,3,4],
      ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
      ['Facebook', 'Tesla', 'Microsoft', 'Apple'] //,[]
   ]
   
   console.log(panggilNestedArray(nestedArray))
// let bubbleSort = (inputArr) => {
//     let len = inputArr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (inputArr[j] > inputArr[j + 1]) {
//                 let tmp = inputArr[j];
//                 inputArr[j] = inputArr[j + 1];
//                 inputArr[j + 1] = tmp;
//             }
//         }
//     }
//     return inputArr;
// };

function bubbleSort(items) {
    var length = items.length,
        sortCount = 0;
        console.log(items.toString())
         for (var i = 0; i < length -1 ; i++) {
                //Notice that j < (length - i)
                    for (var j = 0; j < (length - i - 1); j++) {
                     //Compare the adjacent positions
                         if (items[j] > items[j + 1]) {
            
                
                         //Swap the numbers
                     var tmp = items[j];  //Temporary variable to hold the current number
                     items[j] = items[j + 1]; //Replace current number with adjacent number
                     items[j + 1] = tmp; //Replace adjacent number with current number
               
                 }
            
              }
        sortCount++;
        console.log(`Pass  ${sortCount}  : ${items}`);
    }
    console.log(`This is the final pass: ${items}`)
    // items.forEach(element => {
    //     {

    //     }
    // });
    for(var y = 5; y < length; y++) {
        if(y % 2 !== 0) {
            items[y] += 5;
        }
    }
    console.log(`the new array is ${items}`);
}

let _data = [2,4,10,5,7,9, 4, 7, 1];
bubbleSort(_data) 


var star = '';
for(var i = 0;i <6; i++){
    for(var j=1; j<i; j++){
        star += '*';
        console.log(star)
    }
   
}

var a =""
for (i=0; i<6; i++){
    a+="*"
    console.log(a)
  

}
// isNaN returns true when the input is a not a number 
var number = Number(prompt('Give me a number'))
if (!Number.isNaN(number)){
    console.log(`your number be the root of ` + number * number  )

}else{
    console.log ('gimme number')
}

//switch statements 

switch(prompt('how do you like your fanta ')){
    case 'no ice':console.log('jhus')
    break;
    case 'with ice ': console.log('skepta')
    break;
    case 'bare': console.log('stromzy')
    break;
    default: console.log('drink coke')
    break;
}
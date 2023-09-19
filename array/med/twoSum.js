let arr = [2,8,3,4,5,6];
const target = 9
// brute force

// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = i ; j < arr.length ; j++){
        
//         if( (arr[i] + arr[j]) == target ){
            
//             return console.log([i,j]) 
        
//         }

//     }
// }

// hashing
let hashmap = {}

for(let i = 0 ; i < arr.length ; i++){
    
    let value = target - arr[i]

    if(hashmap[value]){
        return console.log(i,hashmap[value].index)
    }

    if(value > 0){

        hashmap = {...hashmap,[arr[i]]:{index:i}}
    }


}

// console.log(hashmap)




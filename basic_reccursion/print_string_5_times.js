// print_string_5_times

let string = "hello world";
let count = 5


function printString(string){
    if(count == 0){
        return
    }
    count--
    console.log(string)
    printString(string)
}

printString(string)
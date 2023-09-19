// print_linearly_from_1_to_n
let num = 1
let last_num = 22

function print_one_to_n(current_num,last_num){
    if(current_num == last_num + 1){
        return
    }
    console.log(current_num)
    current_num++
    print_one_to_n(current_num,last_num)
}

print_one_to_n(1,last_num)
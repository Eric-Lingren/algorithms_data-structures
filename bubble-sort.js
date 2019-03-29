
const bubbleSort = arr => {
    let n = 0;
    let swapped = true;
    while(swapped){
        swapped = false
        for(let i = arr.length - 1; i >= n; i--){
            if(arr[i] < arr[[i - 1]]){
                let temp = arr[i]
                arr[i] = arr[i - 1]
                arr[i - 1] = temp
                swapped = true
            }
        }
        n++
    }
    return arr
}


console.log(bubbleSort([48, 3, 94, 22, 49, 38]))



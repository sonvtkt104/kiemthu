
// Input là một mảng các số nguyên dương từ 1 -> 100
// Output là tổng của giá trị lớn nhất và giá trị nhỏ nhất trong mảng đó

const totalMinMax = (arr) => {
    let min = 100;
    let max = 0;
    let i = 0;
    while(i < arr.length) {
        if(arr[i] < min) 
            min = arr[i];
        if(arr[i] > max)
            max = arr[i];
        i++;
    }
    let sum = min + max;
    return sum;
}


//run
console.log('BT1', totalMinMax([3,1,4,5,19]))  // 20
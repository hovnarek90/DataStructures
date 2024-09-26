function BubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        let flag = true;
        for (let j = 0; j < arr.length - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = false;
            }
        }
        if (flag) {
            return arr;
        }
    }
    return arr;
}
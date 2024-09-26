function CountingSort(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    let mx = max - min + 1;
    let countArr = [];
    for (let i = 0; i < mx; ++i) {
        countArr[i] = 0;
    }

    for (let i = 0; i < arr.length; ++i) {
        countArr[arr[i] - min]++;
    }
    console.log(countArr);
    let resArr = [];
    for (let i = 1; i < mx; ++i) {
        countArr[i] += countArr[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; --i) {
        resArr[countArr[arr[i] - min] - 1] = arr[i];
        countArr[arr[i] - min]--;
    }

    for (let i = 0; i < arr.length; ++i) {
        arr[i] = resArr[i];
    }
    return arr;
}

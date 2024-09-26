function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function CountingSort(arr, exp) {
    let countArr = [];
    for (let i = 0; i < 10; ++i) {
        countArr[i] = 0;
    }

    for (let i = 0; i < arr.length; ++i) {
        countArr[Math.floor((arr[i] - 1) / exp) % 10]++;
    }

    for (let i = 1; i < 10; ++i) {
        countArr[i] += countArr[i - 1];
    }

    let resArr = new Array(arr.length);

    for (let i = arr.length - 1; i >= 0; --i) {
        resArr[countArr[Math.floor((arr[i] - 1) / exp) % 10] - 1] = arr[i];
        countArr[Math.floor((arr[i] - 1) / exp) % 10]--;
    }

    return resArr;
}

function RadixSort(arr) {
    let max = getMax(arr);
    let res = arr;

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        res = CountingSort(res, exp);
    }

    return res;
}
function Partition(arr, start, end) {
    let pivot = arr[end];
    let i = start - 1;
    for (let j = start; j < end; ++j) {
        if (arr[j] < pivot) {
            ++i;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
}

function QuickSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return;
    }
    let pivot = Partition(arr, start, end);
    QuickSort(arr, start, pivot - 1);
    QuickSort(arr, pivot + 1, end);
    return arr;
}
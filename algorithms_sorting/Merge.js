function merge(arr, start, mid, end) {  
    let tmp = [];
    let s1 = start;
    let e1 = mid;
    let s2 = mid + 1;
    let e2 = end;
    let k = 0;

    while((s1 <= e1) && (s2 <= e2)) {
        if (arr[s1] > arr[s2]) {
            tmp[k++] = arr[s2];
            s2++;
        }
        else {
            tmp[k++] = arr[s1];
            s1++;
        }
    }

    while(s1 <= e1) {
        tmp[k++] = arr[s1];
        s1++;
    }
    while(s2 <= e2) {
        tmp[k++] = arr[s2];
        s2++; 
    }
    for(let i = 0; i < k; ++i) {
        arr[start++] = tmp[i];
    }
    return arr;
}

function mergeSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return;
    }
    let mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
    return arr;
}
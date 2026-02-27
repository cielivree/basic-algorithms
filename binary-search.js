// for already sorted arrays only!
const arr = [1, 4, 68, 129, 1020, 1400, 2640, 9280]

function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)   // index
        const guess = arr[mid]    // element on index

        if (guess === target) {
            return mid    // index of target found
        } else if (guess < target) {
            left = mid + 1     // target's in the bigger side of an array
        } else {
            right = mid - 1      // target's in the smaller side of an array
        }
    }

    return undefined
}

// recursion
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1)
}

factorial(5)
/* 120 = 5 * 4 * 3 * 2 * 1
factorial(5) 
factorial(4)
factorial(3) 
factorial(2)
factorial(1)
*/

// selection sorting
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {    // from first to the last element
        let minIndex = i

        for (let j = i + 1; j < arr.length; j++) {    // about indexes
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {      // switch places
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }

    return arr;
}

const unsortedArr = [68, 4, 1, 129, 9280, 1020, 1400, 2640]
selectionSort(unsortedArr)    // [1, 4, 68, 129, 1020, 1400, 2640, 9280]
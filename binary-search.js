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
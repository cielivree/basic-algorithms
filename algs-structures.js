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

// bubble sorting
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
}

bubbleSort([12, 4, 8, 3, 5, 26, 44, 1])     // [1, 3, 4, 5, 8, 12, 26, 44]

// Quick sort
function quickSort(arr) {
    const pivotIndex = Math.floor(arr.length / 2)
    const pivot = arr[pivotIndex]      // central element
    const left = []
    const right = []

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            continue
        }

        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(pivot, quickSort(right))   // recursion to the both sides of array
}

// Quick sort with points
function partition(arr, left, right) {
    const pivot = arr[Math.floor((left + right) / 2)]
    let i = left - 1
    let j = right + 1

    while (true) {
        do { i++ } while (arr[i] < pivot);
        do { j-- } while (arr[j] > pivot);

        if (i >= j) return j;
        [arr[i], arr[j]] = [arr[j], arr[i]]     // changing places: from smaller to bigger elem
    }
}

function quickSortHoare(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;

    const pivotIndex = partition(arr, left, right)
    quickSortHoare(arr, left, pivotIndex)     // sorting smaller side of an array
    quickSortHoare(arr, pivotIndex + 1, right)    // sorting bigger side
}

// Linked lists
class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = null
        this.tail = null
    }

    append(value) {       // add to the end
        const newNode = new Node(value)

        if (!this.head) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
    }

    prepend(value) {      // add to the beginning

    }

    remove(value) {        // delete

    }

    find(value) {            // finding elem

    }
}

// Queue (FIFO - First In, First Out)
// *adding elements always to the end, removing elements always from the start
// enqueue(), dequeue()

// Stack (LIFO - Last In, First Out)
// adding elements always to the end, removing elements always from the end too
// push(), pop()

// Deque (Дек)
// modifying only its head and tail

// Graph (G - (V, E): V - picks, E - ribs (вершини, ребра))
// any structure: roadmap, map
// Weighted Graph

const graph0 = {
    a: ['b', 'c'],
    b: ['e'],
    c: ['f', 'd'],
    d: ['e'],
    f: ['e'],
    e: ['g']
}

const weightedGraph = {
    a: { b: 3, c: 5 }, 
    b: { c: 2, d: 7 }, 
    c: { d: 9 }
}

const matrix = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
]

const weightedMatrix = [
    [0, 0, 4, 5],
    [0, 3, 7, 0],
    [0, 0, 0, 4],
    [0, 0, 0, 0]
]

// matrix is a multidimensional array!
const simpleMatrix = [
    [5, 3, 2, 6],
    [7, 5, 1, 2],
    [9, 0, 1, 5],
    [1, 4, 6, 2]
]

// all operations with matrix
for (let j = 0; j < simpleMatrix.length; j++) {
    for (let i = 0; i < simpleMatrix[j].length; i++) {

    }
}

// BFS search with graphs (in width)
const graph = {
    a: ["b", "c"],
    b: ["e"],
    c: ["d", "f"],
    d: ["e"],
    e: ["g"],
    f: ["e"],
    g: []
}

function bfs(graph, start) {
    const visited = new Set();
    const queue = [start]
    visited.add(start)

    while (queue.length > 0) {
       const node = queue.shift()     // picking the first elem from the queue

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }

    return visited
}

console.log(bfs(graph, "a"))     // Set(7) { "a", "b", "c", "e", "d", "f", "g" }

// ВFS search with graphs (in depth)

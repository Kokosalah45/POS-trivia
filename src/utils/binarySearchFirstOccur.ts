export default function binarySearchFirstOccur(A: number[], x: number): number {
  let low = 0,
    high = A.length - 1,
    firstOcurrence = -1;
  while (low <= high) {
    let mid = Math.ceil((low + high) / 2);
    if (x > A[mid]) {
      low = mid + 1;
    } else if (x === A[mid]) {
      firstOcurrence = mid;
      high = mid - 1;
      // as i'm searching to the left of the array
    } else {
      high = mid - 1;
    }
  }
  return firstOcurrence;
}

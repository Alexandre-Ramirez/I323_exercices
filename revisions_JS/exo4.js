function sumPreviousNumber(n) {
    if (n == 0)
        return 0;
    return n + sumPreviousNumber(n-1)
}
console.log(sumPreviousNumber(50))
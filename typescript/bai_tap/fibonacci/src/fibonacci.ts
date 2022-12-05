function isFibo(number: number): number {
    if (number == 1) return 0;
    if (number == 2) return 1;
    return isFibo(number - 1) + isFibo(number - 2);
}

const n = 100;
var series : Array<number> = new Array<number>(n);
series.fill(0);
var sum = 0;
for (let  i = 1; i < n; i++) {
    series[i-1] = isFibo(i);
    sum += i;
}
console.log(series);
console.log("Tổng các số fibonacci trong " + n + " phần tử là: " + sum);

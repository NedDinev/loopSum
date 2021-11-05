function numSum(args) {
  let n = Number(args[0]);
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Number(args[i]);
  }

  console.log(sum);
}

numSum(["2", "10", "20"]);
numSum(["3", "-10", "-20", "-30"]);
numSum(["4", "45", "-20", "7", "11"]);
numSum(["1", "999"]);
numSum(["0", "0"]);

let num1 = [2, 3, 1, 5];

let sortedList = num1.sort();

for (let i = sortedList.length; i >= 1; i--) {
  let diff = sortedList[i - 1] - sortedList[i - 2];
  if (diff >= 2) {
    console.log(
      "Missing Number is",
      (sortedList[i - 1] + sortedList[i - 2]) / 2
    );
  }
}

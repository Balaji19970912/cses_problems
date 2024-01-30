let a = "AccGGGTTT";

// console.log(a[0])
let initialValue = a[0];
console.log(initialValue);
let count = 0;
let max = 1;
let finalMax = 0;
let outputVal = 0;

for (let i = 0; i < a.length; i++) {
  if (initialValue == a[i]) {
    count++;
    max = count;
    if (max > outputVal) {
      outputVal = max;
    }
    // console.log(initialValue)
  } else {
    max = count;
    if (max > outputVal) {
      outputVal = max;
    }
    finalMax = max;
    initialValue = a[i];
    count = 0;
    count++;
  }
}

console.log("Output Val = ", outputVal);
console.log("Max == ", max);
console.log("FMax == ", finalMax);
if (finalMax > max) {
  console.log("Final Max = ", finalMax);
}

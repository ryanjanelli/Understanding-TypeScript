// type CombinableType = number | string;
// type ConversionDescriptor = "as-number" | "as-text";

// function combine(
//   input1: CombinableType,
//   input2: CombinableType,
//   resultConversion: ConversionDescriptor
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 26, "as-number");
// console.log(combinedAges);

// const combinedStringAges = combine("30", "26", "as-number");
// console.log(combinedStringAges);

// const combinedNames = combine("Ryan", "Max", "as-text");
// console.log(combinedNames);

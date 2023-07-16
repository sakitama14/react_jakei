// varを使った場合
// var var1 = "var宣言";
// console.log(var1);

// var1 = "var1を上書き";
// console.log(var1);

// var var1 = "varの再宣言";
// console.log(var1);

// letを使った場合
// let var2 = "var宣言";
// console.log(var2);

// var2 = "var2の上書き";
// console.log(var2);

// let var2 = "varの再宣言";
// console.log(var2);

// constを使った場合
// const var3 = "var宣言";
// console.log(var3);

// var3 = "varの上書き";
// console.log(var2);

// const var3 = "varの再宣言";
// console.log(var2);

// オブジェクトの場合は変更ができる
// const var4 = {
//   name: "yudai",
//   age: 24
// };
// var4.name = "YUDAI";
// console.log(var4);

// 配列の場合は変更ができる
// const var5 = ["dog", "cat"];
// console.log(var5);

// var5[0] = "bird";
// var5.push("monkey");
// console.log(var5);
// 上記のような場合でもログされる配列はbird,cat,monkeyの3つになる（なぜ１個目のログは二つではない？）

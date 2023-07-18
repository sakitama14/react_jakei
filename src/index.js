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

/**
 * テンプレート文字列
 */
// const name = "ユウダイ";
// const age = 24;

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数について
 */
// 従来の関数(普通の場合)
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// 変数に入れた場合
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数の場合
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// 引数が一つの場合は省略をすることもできる
// 引数の括弧は書かなくても大丈夫(可読性には欠けるのでプリティアが自動で直します)
// リターンが単純に上のようなそのまま返すタイプだったら簡略化もできる
// const func3 = str => str;
// console.log(func3("func3です"));

// 引数が二つ以上で足した数を返したい時
const func4 = (num1, num2) => {
  return num1 + num2;
};
console.log(func4(10, 20));

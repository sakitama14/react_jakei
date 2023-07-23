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
// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(10, 20));
// 通常の場合
// const myProfile = {
//   name: "yudai",
//   age: 24
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。
// `;
// console.log(message1);
// 分割代入を使いもう少し便利にした場合
// const myProfile = {
//   name: "yudai",
//   age: 24
// };
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。
// `;
// console.log(message2);

// const myProfile = ["Yudai", 24];
// const message4 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message4);

// const [name, age] = myProfile;
// const message5 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message5);

/**
 * スプレッド構文
 */

//  通常の文
// const arr1 = [10, 20];
// console.log(arr1);
// console.log(...arr1);

// スポレッド構文をうまく使った例
// const arr1 = [10, 20];

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピーや結合（よく使う）
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// // スプレッド構文同士の結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//arr6の部分はただのコピーではいけないのか？
// // ただのコピー
// const arr8 = arr4;
// console.log(arr8);
// // この場合だとarr8の値を変えるとarr4も変わってしまう。
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

// // スプレッド構文で持ってくると大丈夫
// const arr9 = [...arr4];
// arr9[0] = 200;
// console.log(arr9);
// console.log(arr4);

/**
 * mapやfilterを使った配列処理
 */

// for文を使った場合
// const nameArr = ["田中", "鈴木", "佐藤"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// // mapを使った例
// const nameArr = ["田中", "鈴木", "佐藤"];
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// const nameArr = ["田中", "鈴木", "佐藤"];
// nameArr.map((name) => console.log(name));

/**
 * filterについて
 *  */
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// 何番目は〇〇ですみたいな文（for文の場合）
// const nameArr = ["田中", "鈴木", "佐藤"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// mapを使用した場合
// const nameArr = ["田中", "鈴木", "佐藤"];
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です！`));

// // ゆうだいの時以外にはさんをつけて返す
// const nameArr = ["田中", "鈴木", "佐藤", "ゆうだい"];
// const newNameArr = nameArr.map((name) => {
//   if (name === "ゆうだい") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子について
 */
// const num = 1300;
// const formattedNum =
//   typeof num === "number"
//     ? num.toLocaleString()
//     : "正しい数値を入力してください";
// console.log(formattedNum);

// 二つの数値の合計が100以上か以下で表示を変える
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です。";
// };
// console.log(checkSum(10, 50));

/**
 * 論理演算子の本当の意味を知ろう
 */
// ||や&&を使った文のことを言います
// 一般的な例
// const num1 = true;
// const num2 = false;

// if (num1 || num2) {
//   console.log("どちらかがtrueです");
// };
// if (num1 && num2) {
//   console.log("どちらもがtrueです");
// };

// 本当の意味を使った例
// const num = 100;
// const fee = num || "数字を入力してください";
// console.log(fee);

// const fee2 = num && "数字が入力されました";
// console.log(fee2);

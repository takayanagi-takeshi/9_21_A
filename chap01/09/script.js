


// htmlの#outPutFieldを変数outPutFieldに代入
let outPutField = document.getElementById('outPutField');

let moji = 'ハロー';
// console.log(moji);

// htmlの#btnクリックボタンを変数btnに代入
let btn = document.getElementById('btn');

// btnがクリックされたら、中の関数を実行する
btn.addEventListener('click', () => {
  // HTMLの#inputFieldに入力されたデータを変数inputFieldに代入
let inputVal = document.getElementById('inputField').value;
// console.log(inputVal);
// inputVal(ブラウザで入力された値)と様を出力する
outPutField.innerText = inputVal + '様';
});
// 各評価のカウント変数
let ratings = [0, 0, 0, 0]; // 1～4に対応する評価のカウント

// 評価を選択したときの処理
function selectFace(rating, element) {
  // 評価をカウントアップ
  ratings[rating - 1]++;

  // 集計結果をそのアイコンの下に表示
  const resultText = element.nextElementSibling.nextElementSibling; // img の次、pタグを2つ飛ばして result-text を取得
  resultText.textContent = `${ratings[rating - 1]}票`;

  // 集計結果を全体で更新
  updateResults();
}

// 集計結果を表示する処理
function updateResults() {
  // 集計結果を表示する領域を取得
  const resultsDiv = document.getElementById("results");

  // 集計結果を更新
  resultsDiv.innerHTML = `
    <h2>集計結果</h2>
    <p>1（不満）: ${ratings[0]}票</p>
    <p>2（やや不満）: ${ratings[1]}票</p>
    <p>3（満足）: ${ratings[2]}票</p>
    <p>4（非常に満足）: ${ratings[3]}票</p>
  `;
}

// 要素の取得
const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

// クリック時間の制御
let clickTime = 0

// いいね数をカウント
let timesClicked = 0

// クリックイベントの登録
loveMe.addEventListener('click', (e) => {
if(clickTime === 0) {
	clickTime = new Date().getTime() // UNIX TIMEでデータを取得できる
} else {
	if((new Date().getTime() - clickTime) < 800) {
	createHeart(e)
	clickTime = 0 // 初期化
	} else {
	clickTime = new Date().getTime()
	}
}
})

// ハートの作成
const createHeart = (e) => {
// https://fontawesome.com/
const heart = document.createElement('i')
heart.classList.add('fas')
heart.classList.add('fa-heart')

const {xInside, yInside} = culcPosition(e)

// ハートの位置を指定
// スタイルの.loveMe .fa-heart {}にてposition: absolute;を
// 指定しているため、位置を制御できる
heart.style.top = `${yInside}px`
heart.style.left = `${xInside}px`

// 子要素として追加
loveMe.appendChild(heart)

// いいね数を増加して挿入
times.innerHTML = ++timesClicked

// クリックするとハート要素が無限に増えていくため、5秒後に削除
setTimeout(() => heart.remove(), 5000)
}

// 要素を出す位置を計算
function culcPosition(e) {
// クリックした位置を取得
const x = e.clientX
const y = e.clientY

// ページからみて画像の位置を取得
const leftOffset = e.target.offsetLeft
const topOffset = e.target.offsetTop

// ハートを出す位置を制御
// 画像の位置とクリック位置から計算
const xInside = x - leftOffset
const yInside = y - topOffset

return {xInside, yInside}
}
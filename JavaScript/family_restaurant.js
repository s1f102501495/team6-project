// DOM（ウェブページの要素）がすべて読み込まれたら実行する
document.addEventListener('DOMContentLoaded', () => {

    // restaurant-cardクラスを持つすべての要素を取得
    const cards = document.querySelectorAll('.restaurant-card');

    // カードを一枚ずつ順番に表示させるための設定
    let delay = 0;
    cards.forEach(card => {
        setTimeout(() => {
            // CSSで設定した opacity と transform を元に戻すことで
            // フェードイン＆スライドアップのアニメーションが実行される
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, delay);
        
        // 次のカードは少し遅れて表示させる
        delay += 200; // 0.2秒
    });
});
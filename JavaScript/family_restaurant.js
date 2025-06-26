// DOMがすべて読み込まれたら実行する
document.addEventListener('DOMContentLoaded', () => {

    // restaurant-cardクラスを持つすべての要素を取得
    const cards = document.querySelectorAll('.restaurant-card');

    // Intersection Observer の設定
    // 画面内に入った要素を監視して、何かをするための仕組み
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // entry.isIntersecting は「要素が画面内に入ったか？」を true/false で返す
            if (entry.isIntersecting) {
                // 画面に入ったら、.is-visibleクラスを追加してCSS側でアニメーションを開始
                entry.target.classList.add('is-visible');
                // 一度表示したら、もう監視する必要はないので解除する
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // 要素が10%見えたら実行
    });

    // 各カードを監視対象に追加
    cards.forEach(card => {
        observer.observe(card);
    });
});
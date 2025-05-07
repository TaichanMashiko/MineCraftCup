// main.js

document.addEventListener('DOMContentLoaded', function() {
    // --- お知らせセクションの開閉機能 ---
    const toggleButton = document.getElementById('toggle-updates-button');
    const contentArea = document.getElementById('updates-content-area');

    if (toggleButton && contentArea) {
        // 初期状態は開いているので、もし閉じた状態から始めたい場合は、
        // HTML側で contentArea に "collapsed" クラスを最初から付与し、
        // toggleButton の aria-expanded を "false" に設定してください。
        // (例: <div id="updates-content-area" class="collapsible-content collapsed">)

        toggleButton.addEventListener('click', function() {
            // contentAreaに 'collapsed' クラスがあれば除去、なければ追加する
            const isCollapsed = contentArea.classList.toggle('collapsed');

            // aria-expanded属性を更新 (スクリーンリーダー向け)
            // isCollapsed が true のとき (つまり、toggle後に collapsed クラスが *ない* 状態 = 開いた状態) は "true"
            // isCollapsed が false のとき (つまり、toggle後に collapsed クラスが *ある* 状態 = 閉じた状態) は "false"
            // toggle()の戻り値は、クラスが *追加された* 場合に true, *削除された* 場合に false を返すので、
            // 実際の表示状態とは逆になるため、!isCollapsed を使うか、classList.contains()で判定する。
            if (contentArea.classList.contains('collapsed')) {
                toggleButton.setAttribute('aria-expanded', 'false');
            } else {
                toggleButton.setAttribute('aria-expanded', 'true');
            }
        });
    }

    // --- 今後、他のJavaScript機能を追加する場合はこの下に追加 ---
});

ジャンケンゲーム
======
socket.io + enchant.jsで作ったサンプルゲームです。
通信対戦ゲームの練習用として、作成しました。


1. ローカルで動かし方
---------------------
依存モジュールをインストールします。
npm install

その後、以下コマンドでサーバを起動させます。
npm start

終了はCntrol + Cを入力して下さい。


2. ゲームの遊び方
-----------------
以下のアドレスにブラウザからアクセスします。

http://サーバのIP:3000/

任意のユーザ名、ルームIDを選択して、ログインボタンを押します。
同じルームに2人入室したら、じゃんけんゲームがはじまります。
※同じルームには、同じユーザIDでは入室できません。

画面下にグー、チョキ、パーのアイコンが出るので好きな手をクリックします。
相手も手を選んだら、画面に結果が表示されます。
以下、エンドレスに続きます。
ソー○アートオンラインのごとく、このゲームにはログアウトボタンは存在しません。
ブラウザの閉じるボタンを押して、ログオフして下さい。


3. その他
---------
中の人がやってるブログです。
じゃんけんゲームの解説も近日公開予定です。

http://blog.livedoor.jp/kaidouji85/

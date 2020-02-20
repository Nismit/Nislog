+++
draft = false
date = 2020-02-19T22:36:34-08:00
title = "Firebase FunctionsとPuppeteerでスクレイピングの定期実行するのを作ってみた"
description = "以前からFirebaseのCould Functionsを使って定期的に処理させる何かを作りたかったんですが、ようやく自分で使いたいアイデアが出てきたので作ってみました。"
tags = ["firebase", "puppeteer"]
eyecatch = "/images/eyecatch/eye-firebase-functions-scraping.jpg"
toc = true
+++

# 作ったもの
フロント側は全く作ってないんですが、私が住んでいるバンクーバーのFront End Developerの平均給与をいくつかのサイトからスクレイピングしてFirebaseのデータベースへ格納するといったとてもシンプルなものを作りました。日本ではどれぐらいあるのかわからないんですが、こっちだとポジションの平均給与がユーザーからの自己申請で出てます。調べてて思ったんですが、サイトによってすごくばらつきがありました。

後々フロント側を作って公開しようと思います🚀

# Firebase Functions
Firebase Functionsっていつも個人的には読んでるんですが、正式には[Cloud Functions for Firebase](https://firebase.google.com/docs/functions)です。Google Cloud Platformのサービスの一つCloud FunctionsをFirebaseと連携させる感じですね。基本的にはFirebase Functionsを作ってデプロイするとURLが発行されるので、そこにアクセスするとトリガーが発動して作ったFunctionが実行されJSON形式などで返ってくるというものです。

## Firebase Functionsの定期実行
定期的にFirebase Functionsを実行するには `pubsub` という機能があるのですがこちらは無料のSparkプランでは使用出来ません。最初知らなくてサンプルで作った定期実行のやつが動かなくてなんでだろうと思ってたのですがこれが原因でした。FirebaseではなくてGoogle Cloud Platform側のスケジューラーを使ってトリガーさせるらしくそこに料金がかかるそうです。今回のサンプルは毎分、毎日動く必要がないので大した金額にはならないだろうと思っています。一応設定してるのが、毎週日曜の夜中に一度トリガーするようにしています。(覚えていたらどれぐらい掛かってるか載せます)

## Firebase Functionsの設定
[公式のガイド](https://firebase.google.com/docs/functions/get-started)に沿って設定しました。`firebase init functions` で作ったプロジェクトを紐付けるんですが、エラーが出て失敗しました。原因は過去に別プロジェクトで使っていたんですが、ログインのキャッシュが切れてしまっていたらしく、一度 `firebase logout` でログアウトした後に再度ログインする事で解決出来ます。たまにしか使わないと結構こういうの起こりますね。Nodeのバージョンも公式に従って、安定版の8を使いました。

# Puppeteer
[Puppeteer](https://github.com/puppeteer/puppeteer) はChromeのDev Toolsを作っているチームが開発したヘッドレスChromeブラウザです。この辺りは色んな方が紹介されているので特に説明はしません。これもずっと使ってみたかったので今回作ったのはかなり色々勉強出来て良かったです。このPuppeteerでスクレイピングをします。スクレイピング自体はネットを見る感じだとPythonでさせるのをよく見ます。

## 基本的な使い方
かなりシンプルに書けるのに、複雑な事も出来てしまうのは凄いとしか言えない。。最初サンプルで書いたのはGoogleにアクセスしてスクリーンショットを撮って終わりというやつです。npmからpuppeteerをインストールして、`images` ディレクトリを同じ階層に作っています。

index.js
```
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://www.google.ca/');
    await page.screenshot({ path: './images/result.png' });
    await browser.close();
})();
```

たったこれだけでGoogleにアクセスしてスクリーンショットまで撮れます。

話はそれますが、Puppeteerとか最近出たMicrosoft製の[Playwright](https://github.com/microsoft/playwright)とか使ってVisual Regressionテストをして見たいなーと思ってます。上手くいったら実践投入してなるべくクロスブラウザのチェックの負担軽減とかnpmのパッケージのアップデートとかを気軽に出来るようにしたいですね。

# Firebase Functionsと組みわせる
いくつかここには落とし穴があって、まずはFirebase Functionsと組み合わせる場合Puppeteerは少しメモリを食います。デフォルトでは128MBに設定されているので1GBに変更した方が良いです。[ドキュメント](https://firebase.google.com/docs/functions/manage-functions#set_timeout_and_memory_allocation)にも載っているのですが、`runWith` メソッドに設定を追加してあげるとメモリとタイムアウトの時間を変更出来ます。

さらに追加でPuppeteerで外部にアクセスさせる場合は無料のSparkプランだと実行出来ません。参考:[Stackoverflow](https://stackoverflow.com/questions/55508640/cloud-functions-puppeteer-error-neterr-name-resolution-failed-at-http-www-g) 

定期実行はしなくても・・・って方もBlazeプランにアップグレードする必要があります😇

```
const functions = require('firebase-functions');

const runtimeOpts = {
    timeoutSeconds: 300,
    memory: '1GB'
}

exports.scraping = functions.runWith(runtimeOpts).https.onRequest(async (req, res) => {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://www.google.ca/');

    // Something Todo

    await browser.close();
    return res.status(200).json({ status: "finished" });
});
```

Firebase Functionsのみデプロイする場合は `firebase deploy --only functions` このコマンド一発で終わりです。デプロイは少しだけ時間がかかります。完了したらURLが発行されるので、そこにアクセスするとデプロイした関数が実行されます。シンプルで良いですね！

## 定期実行させる
定期的にFirebase Functionsを実行するには `pubsub` を使って、スケジュールを利用します。タイムゾーンの変更も可能なので日本のタイムゾーンに設定なども可能です。スケジュールはCrontabのフォーマットか `every 15 minutes` など対応しているものは文章的に書けるっぽいです。こちらの書き方は調べてないのでどんな感じで書けるかいまいち知りません。下のサンプルコードは毎週日曜の0:00に設定しています。タイムゾーンはデフォルトと同じなので変更はしていません。

```
const functions = require('firebase-functions');

const runtimeOpts = {
    timeoutSeconds: 300,
    memory: '1GB'
}

exports.scraping = functions.runWith(runtimeOpts).pubsub.schedule('0 0 * * 0').onRun(async (context) => {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://www.google.ca/');

    // Something Todo

    await browser.close();
});
```

このままデプロイすると、URLは発行されず定期的に実行されるのでまずはhttpでアクセス出来る形式でテストした後に定期実行に変えると良いです。手動で実行出来るのかなと思ったんですが、いまいちわかりませんでした。また、https形式からスケジュール形式に変えてデプロイすると失敗します。一度 `firebase functions:delete scraping` で設定した関数名を指定して関数を削除してあげてから再度デプロイすると成功します。

実際のものは複数ページを並列にアクセスさせて `Promise.all()` でデータベースへの書き込みも含め、全て終了するまで待たせています。5サイトにアクセスさせてデータベースへの書き込みを行った場合は約1.4GBのメモリ使用率でした。もうちょっと増えると2GBの範囲を越えてエラーで終了してしまうので、そうなった場合はFunctionを分けるしか方法はなさそうです。機会があればPlaywrightでも試してみたい。
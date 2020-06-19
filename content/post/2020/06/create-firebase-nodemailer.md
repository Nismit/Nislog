+++
draft = false
date = 2020-06-18T22:25:46-07:00
title = "Firebase Functions + Nodemailerでサーバーレスメール送信機能を作ってみた"
description = "ReactやVueなどでアプリやサイトを作っていて、メールフォームをどうしたら良いのか悩んでいたのですが、Nodemailerというものを見つけたのでFirebase Functionsと組み合わせてサーバーレスなメーラーを作ってみました。"
tags = ["firebase", "nodemailer"]
eyecatch = "/images/eyecatch/eye-firebase-nodemailer.jpg"
toc = false
+++

# Firebase FunctionsとNodemailerを使ってメール送信機能を作ってみました
前々からReact等でアプリやサイトを作ってた時にメールフォームとかどうしたら良いのかなーって思ってました。普段はWordPressを触っているので、そもそもPHPでメールは送れるしプラグインでメールフォームもサクッと実装出来てしまうので深く考えた事はなかったです。

ですが、最近Firebase Functionsでスクレイピングを実装してみてNode.jsでメールの処理が出来れば可能だなぁと思っていたら丁度会社のタスクとしてFirebaseのReal Time Databaseに格納されているアドレス宛に通知メールを送りたいというのが来たので調べつつ、作ってみました。

参考にしたのはこのサイト (https://medium.com/@edigleyssonsilva/cloud-functions-for-firebase-sending-e-mail-1f2631d1022e)

正直ほとんどこれに沿って作っただけです・・・😇\
ただいくつか修正するポイントや躓いた所があったので補足しておこうと思います。

作ったのは[GitHubで公開](https://github.com/Nismit/cffnm)しています。フォークして改造してもらっても良いし、PRなどがあれば是非是非お願いします。良さげだね！と思ったらスターでも付けてください🙇🏻

# プロジェクトのセットアップ
Firebaseの良い所はCLIでプロジェクトが作れてしまう所ですね。ちょっとしたものとかテストしたい時にさらっと構築出来るのは非常に良いです。前に書いたFirebaseの記事はセットアップについて書いてなかったので一応今回は書いておこうかなと思います。

firebase-toolsをインストールしてなければ、`npm install -g firebase-tools` でグローバルにインストールして、
Firebaseにログインをしていなければ、 `firebase login` を実行でブラウザが立ち上がって現在使っているGoogleアカウントでのFirebase CLIの許可を求められます。他のアカウントでしたい場合は `firebase logout` でログアウトしてまたログインからし直せば切り替え出来ます。

これが出来たら、`firebase init functions` を実行してCreate a new projectを選択

![Firebase-1](/images/2020/cffnm-firebase-1.png)

プロジェクト名を決めます。(後で変更は出来ません。プロジェクト毎消す必要があります) *ここで公開してるのはサンプルで既に消してあります:)
プロジェクトのエイリアスも設定出来ますがこれは後からでも決めれます。

![Firebase-2](/images/2020/cffnm-firebase-2.png)

ちょっとしたらプロジェクトの作成が完了します。
その後、開発環境一式がダウンロードされるのでnpmからパッケージをインストールする場合はyesを選択

![Firebase-4](/images/2020/cffnm-firebase-4.png)

ここは少し時間かかりますが、これで終わりです。

![Firebase-5](/images/2020/cffnm-firebase-5.png)

私の作ったやつをクローンする場合は、CLIではなくブラウザからFirebaseにアクセスしてプロジェクトを作りましょう。作り終わったら、`.firebaserc` に作ったプロジェクト名に書き換えてください。

## サードパーティ製のアプリのアクセス許可をする
メール送信はGmailのメーラーを使用するので、Googleのアカウントページに飛んで[セキュリティ](https://myaccount.google.com/security) > 安全性の低いアプリのアクセスを有効にする必要があります。
これを有効化しないと、 `Error: Invalid login: 535-5.7.8 Username and Password not accepted.` というエラーがFirebase Functionsで返ってきます。どうにかセキュリティのレベルを上げたいんですが、今のところ何をしたら良いのかわからず・・・

## GmailのアドレスとパスワードをFirebaseに保管する
Gmailのサービスを利用するにはログインが必要で、コードの中にアドレスやパスワードなんて入れてはいけないのでFirebaseの環境変数をセットします。
これもターミナルから一発で出来て `firebase functions:config:set someservice.key="THE API KEY"` こんな感じで格納出来る。

コードからはfunctionsの機能から取得が可能。

```
const key = functions.config().someservice.key;
```

何入れたか忘れた時は `firebase functions:config:get` のコマンドで確認出来るので忘れた時はこれでチェックしましょう。

## メールの本文などの設定
これは作ったものからの抜粋ですが `mailOptions`で設定が可能です。

```
exports.sendMail = functions.https.onRequest((req, res) => {
    CORS(req, res, () => {
        const dest = req.query.dest;

        const mailOptions = {
            from: 'John Doe <example@example.com>',
            to: dest,
            subject: 'Test Mail', // email subject
            text: 'Plain Text Test Email',
            html: '' // HTML Mail
        };

        return transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                return res.send(error.toString());
            }

            return res.send('Mail Sended');
        });
    })
});
```

送り先はFirebase Functionsからのクエリを受け取って設定してます。ここでは `dest` というクエリ名にしています。
URLはこんな感じになります。 `https://us-central1-your-project-name.cloudfunctions.net/sendMail?dest=example@example.com`
コードの詳細などは[GitHub](https://github.com/Nismit/cffnm)を見てみてください。READMEにセットアップなども英語ですが書いています。(簡単に書いてるから絶対読めますw)

## その他のトラブル
もう一つ私はエラーが出たんですが、 `Error: Invalid login: 534-5.7.14 534-5.7.14 Please log in via your web browser and then try again.` というエラーでなんでだろうと思っていたら、これはブラウザやアプリからログインをしていないのでBOTなどをブロックするGoogleのCaptchaが反応してアクセス出来ないようにしているみたいでした。
https://support.google.com/accounts/answer/2461835?hl=en

上のリンクにもこれが載っているだけなんだけどちゃんとソースがある方が信用出来ると思ったので載せています。面倒な人はこちらにアクセス。
https://accounts.google.com/b/0/DisplayUnlockCaptcha

これでメールが来るようになりました。

トータルで2-3時間ぐらいで送信確認まで出来たので手軽に実装出来て楽しかったです。これからNode v10にアップデートしてテストをした後にTypeScriptに移行させる予定です。
フロントで実装する場合はrecaptchaなどを導入する事と本文なども送信する場合はエンコード処理なども必要かなと思いました。ブログかポートフォリオに今度実装してみようと思います！
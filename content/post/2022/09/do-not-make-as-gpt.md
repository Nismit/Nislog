---
draft: false
date: "2022-09-18T20:10:18-08:00"
title: Intel MacでWindowsのUSBインストーラーを作るときはGPT形式では作ってはいけない
description: タイトル通りですが、WindowsのインストーラーをMacで作った時にWindowsのインストールが出来なくて困ったのでメモとして置いておきます。
eyecatch: /images/eyecatch/eye-do-not-make-as-gpt.jpg
tags:
- windows
toc: false
---

タイトルでほぼ言ってしまっていますが、結論を言うと(Intel)MacでWindowsのUSBインストーラーを作る際は、フォーマット時のGPT形式ではなくMBR形式でフォーマットするようにしてください。

# インストールが完了しない

大学に入る際にMacを使い始めて10年以上経っていますが、数億年ぶりにWindowsマシンを自作で組みました。その際Windowsのインストーラーなどは無くネットで調べたところMacでも作れるとの事だったので色々なサイトを参考にUSBにインストーラーを作成していました。

いざPCがある程度組み終わって、BIOSも立ち上がりいよいよWindowsをインストールするだけ！となったところでこのインストールが途中でエラーが発生して完了しませんでした。

## 謎のエラー

表示される内容は `Windows could not prepare the computer to boot into the next phase of installation` という内容のみで全く原因がわかりませんでした。ネットで調べたところ、以下の要因が考えられるようでした。

- マザーボードのファームウェアが古いまま
- マザーボードなどがそのWindowsのバージョンに対応してない
- BIOSの設定 (Secure bootやUEFI bootの設定周り、もしくはCSMなど)
- 余計なデバイスが何かしら邪魔をしている (マザーボード、メモリ、CPUしかテスト時は付けてなかったです)

色々な変更を試していましたが結局結果は変わらずでした。ただ一つ残っている可能性としてマザーボードの初期不良も考えていました。ですので今回のインストーラーもダメだった場合は不良品を疑った方が良いです。

## 質問サイトである回答見つける

中々これと言った解決策が見つからず、色々探していたところにある回答を見つけました。それが上記の件でGPT形式でのフォーマットでのUSBインストーラーは何か問題が起こるそうです。詳しくはわかりませんがGPT形式のUSBインストーラーがインストールしたい先のSSD/HDDに何か干渉するそうです。2020年の回答ですが未だに直ってないと言うのがなんとも。。

見つけた回答は[こちら](https://superuser.com/questions/1381492/why-does-windows-10-fail-to-install-on-uefi-gpt-laptop)

## Intel MacでWindowsのUSBインストーラーを作るには

インストーラーを作る前に準備するのは、
- 再フォーマットしても良いUSB (16/32GBが良いと思います)
- WindowsのISOイメージ
- Homebrewで[wimlib](https://formulae.brew.sh/formula/wimlib)をインストール (このパッケージはUSBのフォーマットタイプがFAT32なので4GB以上のファイルサイズを扱えません。そしてインストーラーが4GBを超えてるので分割してあげる必要があるのでwimlibパッケージを使います)

これらの準備ができたらUSBを差して、ターミナルでどんどん作っていきます。

```
// これでUSBが認識されている場所を確認します (今回は/dev/disk2でした)
diskutil list
// MS-DOS(FAT32)かつMBR形式でUSBをフォーマットします
diskutil eraseDisk MS-DOS "WIN11" MBR /dev/disk2
// ダウンロードしたISOをUSBに入れていく為に一度マウントします
hdiutil mount ~/Downloads/Win11_English_x64v1.iso
// インストーラー以外のファイルをUSBに転送します
rsync -vha --exclude=sources/install.wim /Volumes/CCCOMA_X64FRE_EN-US_DV9/* /Volumes/WIN11
// wimlibを使ってインストーラーを分割してUSBに入れます (結構時間がかかりました)
wimlib-imagex split /Volumes/CCCOMA_X64FRE_EN-US_DV9/sources/install.wim /Volumes/WIN11/sources/install.swm 3500
```

この工程が終わればインストーラーは完成し無事にインストールが終了しました。

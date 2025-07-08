---
draft: true
date: 2024-11-19T14:32-08:00
title: "ShaderToy逆引き: uv アスペクト比"
description: ShaderToyで良く見るコードを調べたノートです。uv、アスペクト比について調べました。
eyecatch: 
tags:
  - shader
toc: false
---
ShaderToyのコードを見ているとよく `uv` という変数を見ます。始めはおまじないのように定義していましたが、イマイチよく分かってなかったのでちゃんと調べました。

そもそも `uv` と呼ばれているのは調べた限りでは `wxyz` が3Dモデルで使われていたのでそこから更に前の文字を使って `uv` となっている説やテクスチャ座標で使われる事が多いので2次元ないしは3次元ベクトルで示される為、ベクトル空間でよく使われる `uv` + (`w`)から来ている説もあってどこから来ているのかは明確には見つけれなかったです。

ただ今では `uv` マッピングや `uv` 座標など広く一般的に浸透していますね。ShaderToyで見かけるものは `uv` の他に `p` , `st` などもありますね

uv と st の違い
https://stackoverflow.com/questions/10568390/difference-between-uv-and-st-texture-coordinates#:~:text=uv%20coordinates%20start%20from%20the,%2Daxis%20is%20facing%20up).







Shader
最初のステップから。`uv` の正規化でコードはこちら: [https://www.shadertoy.com/view/XXlGWM](https://www.shadertoy.com/view/XXlGWM)


![Shadertoyでuvを正規化した図](https://res.cloudinary.com/dtbaqaikb/image/upload/v1732082547/shadertoy-uv-1_ranki2.png)




ShaderToyの座標は左下を[0, 0]として、右上が表示されている解像度、上記のキャプチャを参照すると1280x720となっているので、右上は[1280, 720]となる。

uvの正規化を行うと、左下が[-1, -1], 右上が[1,1]となる。そして中心が[0,0]となる。この正規化を行う事で今後様々な計算を行う上で扱いやすくなる。

Tips: 色デバッグ
GLSLでは普通のプログラミング言語のように `console.log()` などで値を出すのが出来ないのである程度の数字を知りたいのであれば色デバッグというかなり変態的なテクニックがある。最初は意味が分からなかったのですが慣れていくと扱えるようになりました。ただし、値が0-1の間に収まっているのが条件となるのでどうにか `normalize()` などを使ったりして `vec3(debug, 0.0, 0.0)` という形で画面に出力すると0.0に近いと黒で1.0に近いと赤になるのでなんとなくの値がわかります。



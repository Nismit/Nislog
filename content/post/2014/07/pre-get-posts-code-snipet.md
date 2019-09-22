+++
draft = false
date = 2014-07-18T11:16:28Z
title = "[WP]pre_get_postsを使いこなす！pre_get_posts使い方まとめ"
description = "Wordpressのバージョン4ベータ版がリリースされましたね。そろそろメジャーアップデートで次のステージ4へ上がって行きます。そんな中かなり遅れてpre_gets_postsについて紹介しておこうかなと思います・・・w 非常に便利ですので、是非使用してみてください"
tags = ["wordpress"]
eyecatch = "/images/eyecatch/eye-wordpress.jpg"
toc = true
+++

# pre_get_postsとは
WordPressのアクションフックに位置づけられており、WordPressがクエリを実行する前に呼び出されてます。 詳しい事は [@HissyNC](https://twitter.com/HissyNC) さんの記事、「[query_postsを捨てよ、pre_get_postsを使おう](http://notnil-creative.com/blog/archives/1688)」を参照して頂くのがベターです。query_postsの事が書かれておりますが、使用するのはあまりよろしくないと私も思います。 サブクエリとしてはWP_Queryインスタンスを生成するのがいいと思います。

## 使い方
pre_get_postsの使い方としては、functions.phpに記述していきます。 以下はカテゴリーページを表示した時に投稿を5件表示するという場合の書き方です。

```php
function change_posts_per_page($query) {
 /* 管理画面,メインクエリに干渉しないために必須 */
 if( is_admin() || ! $query->is_main_query() ){
     return;
 }

 /* カテゴリーページの表示件数を5件にする */
 if ( $query->is_category() ) {
     $query->set( 'posts_per_page', '5' );
     return;
 }

}
add_action( 'pre_get_posts', 'change_posts_per_page' );
```
ページの条件としては以下のようなものがあります。

```php
/* TOPページ */
$query->is_home()

/* 詳細ページ */
$query->is_single()

/* 固定ページ */
$query->is_page()

/* アーカイブページ */
$query->is_archive()

/* カスタム投稿タイプアーカイブページ カスタム投稿タイプを入れてください */
$query->is_post_type_archive( 'post_type' )

/* 日付アーカイブページ */
$query->is_date()

/* 年別アーカイブページ */
$query->is_year()

/* 月別アーカイブページ */
$query->is_month()

/* 制作者アーカイブページ */
$query->is_author()

/* カテゴリーページ */
$query->is_category()

/* カテゴリーページ 配列での指定(カテゴリID3,カテゴリスラッグfoo,カテゴリ名Bar barのいずれか) */
$query->is_category( array(3,'foo','Bar bar') )

/* タグページ */
$query->is_tag()

/* タクソノミーページ */
$query->is_tax()

/* タクソノミーページ fooというスラッグのタクソノミーアーカイブが表示された時*/
$query->is_tax( 'foo' )

/* タクソノミーページ bar1,bar2のスラッグがfooタクソノミーアーカイブで表示された時 */
$query->is_tax( 'foo', array('bar1','bar2') )

/* 検索結果ページ */
$query->is_search()

/* フィードページ */
$query->is_feed()

/* 404ページ */
$query->is_404()
```

## クエリの設定方法
`$query->set( 'パラメータ', 'パラメータ値'  );` 色々なクエリがセット可能ですが、いくつかご紹介致します。

```php
/* 現在のページ番号を取得 */
$query->set( 'paged',get_query_var( 'paged' ) );

/* 表示数の変更 */
$query->set( 'posts_per_page',5  );

/* 特定タクソノミーの取得 タクソノミー:foo_cat,ターム:slug_foo */
$taxquery = array(
 array(
   'taxonomy' => 'foo_cat',
   'field' => 'slug',
   'terms' => array( 'slug_foo' )
 )
);
$query->set( 'tax_query' , $taxquery );

/* カテゴリーID3の記事取得 */
$query->set( 'cat','3' );

/* カテゴリーID2の記事を除外する */
$query->set( 'cat','-2' );

/* 特定カテゴリー名の記事を取得する(スラッグ指定) */
$query->set( 'category_name','foo' )

/* 特定カテゴリーを除外する */
$query->set( 'category__not_in',array(2,3) );

/* 取得する記事のタイプを投稿のみにする(固定ページやカスタム投稿タイプを除外する) */
$query->set( 'post_type','post' );
```

## 具体的なコード例
pre_get_postsの実際のコード例をご紹介致します。

```php
function pre_get_posts_custom($query) {
  if( is_admin() || ! $query->is_main_query() ){
      return;
  }

  /* カテゴリーページの表示件数を5件にし、カテゴリID2を除外する */
  if ( $query->is_category() ) {
      $query->set( 'posts_per_page', '5' );
      $query->set( 'cat','-2' );
      return;
  }

  /* 検索結果ページで固定ページやカスタム投稿を除外する */
  if( $query->is_search() ){
     $query->set( 'post_type','post' );
     return;
  }

  /* カスタム投稿アーカイブartistページで
  カスタム投稿タイプ:artistでタクソノミーfrom内にあるタームusの記事を取得する */
  if( $query->is_post_type_archive( 'artist' ) ){
   $taxquery = array(
        array(
           'taxonomy' => 'from',
           'field' => 'slug',
           'terms' => array( 'us' )
        )
   );
   $query->set( 'tax_query' , $taxquery );
  }

  /* Feed(RSS)ページでカスタム投稿タイプ(複数ある場合)も含めて出力させる */
  if( $query->is_feed() ){
   $query->set( 'post_type',array( 'foo','bar' ) );
  }

}
add_action( 'pre_get_posts', 'pre_get_posts_custom' );
```

# まとめ
いかがだったでしょうか。pre_get_postsはquery_postsと違い、
メインクエリに対してのフィルターとしての扱いでありパフォーマンス面でも良くなると思います。\
functionsに書き込んでいくのは最初はやっかいかもしれません(phpのエラーでページが表示されなくなる等・・・w) ですが小さい部分、
記事の表示などからはじめていくと色々と理解できて複雑な処理も可能になります！

# 参考サイト
[query_postsを捨てよ、pre_get_postsを使おう](http://notnil-creative.com/blog/archives/1688) - [notnil creation weblog](http://notnil-creative.com/blog/)\
[プラグイン API/アクションフック一覧/pre get posts](http://wpdocs.sourceforge.jp/%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3_API/%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%95%E3%83%83%E3%82%AF%E4%B8%80%E8%A6%A7/pre_get_posts) - [WordPress Codex 日本語版](http://wpdocs.sourceforge.jp/Main_Page)\
[関数リファレンス/WP Query](http://wpdocs.sourceforge.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/WP_Query) - [WordPress Codex 日本語版](http://wpdocs.sourceforge.jp/Main_Page)

**Change Log**

2019/09/21 - サムネイル画像を追加

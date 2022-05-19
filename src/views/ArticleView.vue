<template>
  <div id="article_view_wrapper">
    <div id="article_top_wrapper">
      <div id="article_title_wrapper">
        <div id="article_title">タイトル</div>
        <div id="article_title_sub">サブタイトル</div>
      </div>
      <div id="article_top_information">
        <div>
          <div id="article_author">著者: あああああ</div>
          <div id="article_reflesh_date">最終更新日: 2022/05/17</div>
        </div>
      </div>
    </div>
    <div id="article_border">
      <div id="article_border_links">
        <div class="border_link"><router-link to="/">HOME</router-link></div>
        <hr />
      </div>
    </div>
    <div id="article_view">
      <div id="article_body">bodebode</div>
      <div id="article_side_menu">
        <div class="article_side_contents">menu_contents</div>
        <div class="article_side_contents">menu_contents</div>
        <div class="article_side_contents">menu_contents</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/sass/article/article.scss"></style>

<template>
  <div id="article_view_wrapper">
    <div id="article_top_wrapper">
      <div id="article_title_wrapper">
        <div id="article_title">{{ article_property.article_title }}</div>
        <div id="article_title_sub">
          {{ article_property.article_subtitle }}
        </div>
      </div>
      <div class="article_top_information">
        <div>
          <div class="article_top_author">著者:ナノ式</div>
          <div class="article_reflesh_date">
            最終更新: {{ article_property.upload_date }}
          </div>
        </div>
      </div>
    </div>
    <div id="article_border">
      <div id="article_border_links">
        <div class="border_link"><router-link to="/">HOME</router-link></div>
        <hr />
      </div>
    </div>
    <div id="article_information_margin"></div>
    <div id="article_view">
      <ArticleTextView
        :articleInformation="this.article_property"
      ></ArticleTextView>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/sass/article/article.scss"></style>

<script>
import ArticleTextView from "@/components/article/ArticleTextView.vue";
import { ArticleRequest } from "@/script/ArticleRequest";
export default {
  components: {
    ArticleTextView,
  },
  data: function () {
    return {
      article_property: {},
    };
  },
  created: async function () {
    const request = new ArticleRequest(window.location.search);
    request.judgeArticleRequestType();
    // 記事一覧を取得する
    this.article_property = await request.getArticleAsync();
  },
  computed: {},
};
</script>

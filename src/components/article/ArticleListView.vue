<template>
  <div id="list_view_wrapper">
    <div class="article_list_contents">
      <div
        class="content_article_title"
        v-for="article in articleData"
        :key="article.article_url"
      >
        <ArticleListContents :contents="article"></ArticleListContents>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="@/assets/sass/article/article_list.scss"></style>
<script>
import ArticleListContents from "@/components/article/ListContents/ArticleListContents.vue";
export default {
  props: {
    articleInformation: {
      Type: Object,
      Require: true,
    },
  },
  computed: {
    articleData() {
      const array = this.articleInformation.article_list?.map((content) => {
        let new_content = content;
        new_content["full_article_url"] =
          "/article?function_cd=" +
          content.function_cd +
          "&article_url=" +
          content.article_url;

        new_content["params"] = {
          function_cd: content.function_cd,
          article_url: content.article_url,
        };
        return new_content;
      });
      return array;
    },
  },
  components: {
    ArticleListContents,
  },
};
</script>

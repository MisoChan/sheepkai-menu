<template>
  <div>
    <ArticleListView
      :articleInformation="this.article_property"
    ></ArticleListView>
  </div>
</template>

<script>
import ArticleListView from "@/components/article/ArticleListView.vue";
import { ArticleRequest } from "@/script/ArticleRequest";
export default {
  components: {
    ArticleListView,
  },
  data: function () {
    return {
      article_property: {},
    };
  },
  mounted: async function () {
    const request = new ArticleRequest("function_cd=PORTFOLIO&page_no=1");
    this.article_property = await request.getArticleListAsync();
  },
};
</script>

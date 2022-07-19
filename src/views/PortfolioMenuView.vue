<template>
  <div id="portfolio_top_view_wrapper">
    <ArticleListView
      :articleInformation="this.article_property"
    ></ArticleListView>
    <div id="portfolio_picture_wrapper">
      <img src="/icons/PORTFOLIO.png" id="portfolio_top_picture" />
    </div>
    <ModalMessage ref="popup"></ModalMessage>
  </div>
</template>
<style lang="scss" scoped src="@/assets/sass/portfolio/portfolio_top.scss" />
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
    try {
      const request = new ArticleRequest("function_cd=PORTFOLIO&page_no=1");
      this.article_property = await request.getArticleListAsync();
    } catch (exception) {
      this.$refs.popup.openModal("ERROR_FAILED");
    }
  },
};
</script>

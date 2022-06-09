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
      <div id="article_body">
        <MarkdownView
          :markdownText="article_property.article_md_text"
          :isSanitized="article_property.is_sanitized"
        ></MarkdownView>
      </div>
      <div id="article_side_menu_wrapper">
        <div id="article_side_menu">
          <MarkdownHeaderList
            :markdownText="article_property.article_md_text"
          ></MarkdownHeaderList>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/sass/article/article.scss"></style>

<script>
import MarkdownView from "@/components/article/MarkdownViewer.vue";
import MarkdownHeaderList from "@/components/article/MarkdownHeaderList.vue";
export default {
  data: function () {
    return {
      article_property: {},
    };
  },
  created: function () {
    this.$http
      .get("/getArticle", {
        params: { function_cd: "ABOUT_US", article_url: "aboutpage" },
      })
      .then((response) => (this.article_property = response.data));
  },
  computed: {},
  components: {
    MarkdownView,
    MarkdownHeaderList,
  },
};
</script>

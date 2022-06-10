<template>
  <div id="article_body">
    <MarkdownView
      :markdownText="articleInformation.article_md_text"
      :isSanitized="articleInformation.is_sanitized"
    ></MarkdownView>
  </div>
  <div id="article_side_menu_wrapper">
    <div id="article_side_menu">
      <MarkdownHeaderList
        :markdownText="articleInformation.article_md_text"
      ></MarkdownHeaderList>
    </div>
  </div>
</template>
<style
  lang="scss"
  scoped
  src="@/assets/sass/article/article_text_view.scss"
></style>
<script>
import MarkdownView from "@/components/article/Markdown/MarkdownViewer.vue";
import MarkdownHeaderList from "@/components/article/Markdown/MarkdownHeaderList.vue";
export default {
  components: {
    MarkdownView,
    MarkdownHeaderList,
  },
  props: {
    articleInformation: {
      Type: Object,
      Require: true,
    },
  },
};
</script>

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
      <div id="article_body">
        <MarkdownView :markdownText="markdown_data"></MarkdownView>
      </div>
      <div id="article_side_menu">
        <MarkdownHeaderList :markdownText="markdown_data"></MarkdownHeaderList>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/sass/article/article.scss"></style>

<script>
import MarkdownView from "@/components/article/MarkdownViewer.vue";
import MarkdownHeaderList from "@/components/article/MarkdownHeaderList.vue";
export default {
  methods: {
    mmaa(a) {
      this.aadata = a;
    },
  },
  computed: {
    markdown_data() {
      return "# Now loading.... \n ### ちょっとまってね… ";
    },
  },
  components: {
    MarkdownView,
    MarkdownHeaderList,
  },
};
</script>

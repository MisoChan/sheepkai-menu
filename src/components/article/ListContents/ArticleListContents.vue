<template>
  <button class="article_list_content_button" @click="onClick">
    <div class="article_list_content_box">
      <div class="article_list_content_belt"></div>
      <div class="article_title">{{ contents.article_title }}</div>
      <div class="upload_date">{{ contents.upload_date }}</div>
    </div>
  </button>
</template>
<style
  lang="scss"
  scoped
  src="@/assets/sass/article/article_list contents.scss"
></style>
;
<script>
export default {
  props: {
    contents: {
      Type: Object,
      Require: true,
    },
  },
  methods: {
    onClick() {
      this.$router.push(this.contents.full_article_url);
    },
  },
};
</script>

<template>
  <div>
    <div class="article_title">{{ contents.article_title }}</div>
    <div class="upload_date">{{ contents.upload_date }}</div>
  </div>
</template>
<script>
export default {
  props: {
    contents: {
      Type: Object,
      Require: true,
    },
  },
};
</script>

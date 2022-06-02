<template>
  <div class="markdown_viewer" v-html="markdownData"></div>
</template>

<script>
import { marked } from "marked";
export default {
  props: {
    markdownText: {
      Type: String,
      Require: true,
    },
  },
  computed: {
    markdownData() {
      return marked(this.markdownText);
    },
  },
};
</script>

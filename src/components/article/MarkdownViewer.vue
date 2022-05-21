<template>
  <div class="markdown_viewer" v-html="markdownData"></div>
</template>

<script>
import { marked } from "marked";
export default {
  computed: {
    markdownData() {
      return marked("# このページについて    \n ## aaaa");
    },
  },
};
</script>

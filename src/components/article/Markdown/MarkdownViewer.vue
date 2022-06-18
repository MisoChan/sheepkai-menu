<template>
  <div class="markdown_viewer" v-html="markdownData"></div>
</template>

<style
  lang="scss"
  scoped
  src="@/assets/sass/components/markdown/markdown_viewer.scss"
></style>

<script>
import { MarkDownUtility } from "@/script/MarkdownUtility.js";
export default {
  props: {
    markdownText: {
      Type: String,
      Require: true,
      Default: "# Now loading...",
    },
    isSanitized: {
      Type: Boolean,
      Require: true,
      default: true,
    },
  },
  computed: {
    markdownData() {
      const mdtext = this.markdownText ?? "# Now loading...";
      const mdutil = new MarkDownUtility();
      const converted_md = mdutil.convertImageSrc(
        mdtext,
        this.isSanitized,
        process.env.VUE_APP_API_URL
      );
      console.log(converted_md);
      return converted_md;
    },
  },
};
</script>

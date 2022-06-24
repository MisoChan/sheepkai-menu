<template>
  <div
    class="header_title"
    v-for="header in markdownHeaderData"
    :key="header.id"
  >
    <a
      class="md_header_text"
      href="#"
      @click.prevent.stop="contentClick(header)"
    >
      {{ header.title }}
    </a>
    <div
      class="sub_header_title"
      v-for="subhead in header.sub_headers"
      :key="subhead.id"
    >
      {{ subhead.title }}
    </div>
  </div>
</template>
<style
  lang="scss"
  scoped
  src="@/assets/sass/components/markdown/markdown_headerlist.scss"
></style>
<script>
import { MarkDownUtility } from "@/script/MarkdownUtility.js";
export default {
  emits: ["content-click"],
  data: function () {
    return {
      h2IdNumber: 0,
    };
  },
  props: {
    markdownText: {
      Type: String,
      Require: true,
    },
  },
  computed: {
    markdownHeaderData() {
      const mdtext = this.markdownText ?? "# Now loading...";
      const utility = new MarkDownUtility();
      return utility.getMarkDownHeaderList(mdtext);
    },
  },
  methods: {
    contentClick(content) {
      this.$emit("content-click", content.id);
    },
  },
};
</script>

<template>
  <ContentsHead></ContentsHead>
  <div id="contents_viewer">
    <router-view />
  </div>
</template>
<style lang="scss" scoped src="@/assets/sass/views/contents.scss"></style>
<script>
import ContentsHead from "@/components/commons/ContentPageHeader.vue";
export default {
  components: {
    ContentsHead,
  },
};
</script>

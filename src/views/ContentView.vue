<template>
  <ContentsHead></ContentsHead>
  <router-view />
</template>
<style lang="scss" scoped src="@/assets/sass/article/article.scss"></style>
<script>
import ContentsHead from "@/components/commons/ContentPageHeader.vue";
export default {
  components: {
    ContentsHead,
  },
};
</script>

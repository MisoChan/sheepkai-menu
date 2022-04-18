<template>
  <div class="menu_contents">
    <div class="menu_icon_frame"><img @src="item.imagesrc" /></div>
    <div class="menu_contents_name">
      <router-link :to="item.link">{{ item.contents_title }}</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped src="@/assets/sass/menu/menu_contents.scss"></style>
<script>
export default {
  props: {
    item: {
      Type: Object,
      Require: true,
    },
  },
};
</script>

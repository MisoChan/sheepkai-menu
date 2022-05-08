<template>
  <div class="menu_contents">
    <router-link :to="item.link">
      <div class="menu_icon_frame">
        <img class="menu_icon_img" :src="item.imagesrc" />
      </div>
      <div class="menu_contents_name">
        {{ item.contents_title }}
      </div>
    </router-link>
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

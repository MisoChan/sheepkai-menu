<template>
  <div class="menu_contents">
    <div class="menu_icon_frame"><img @src="item.imagesrc" /></div>
    <div class="menu_contents_name">
      <router-link :to="item.link">{{ item.contents_title }}</router-link>
    </div>
  </div>
</template>

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

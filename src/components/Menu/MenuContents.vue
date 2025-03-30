<template>
  <button @click="onClick()">
    <div class="menu_contents">
      <div class="menu_icon_frame">
        <img
          class="menu_icon_img"
          :src="item.imagesrc"
          style="width: 120px; height: 120px"
        />
      </div>
      <div class="menu_contents_name">
        {{ item.contents_title }}
      </div>
    </div>
  </button>
</template>
<style
  lang="scss"
  scoped
  src="@/assets/sass/components/menu/menu_contents.scss"
></style>
<script>
export default {
  props: {
    item: {
      Type: Object,
      Require: true,
    },
  },
  methods: {
    onClick() {
      this.$router.push(this.item.link);
    },
  },
};
</script>

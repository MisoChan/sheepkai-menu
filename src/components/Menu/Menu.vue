<template>
  <div id="main_menu">
    <div id="menu_contents">
      <div
        class="menu_contents_wrapper"
        v-for="item in menu_contents"
        :key="item.content_id"
      >
        <MenuContents :item="item"></MenuContents>
      </div>
    </div>
    <div id="menu_copyrights">
      Copyright © 2022-2022 Nano-Shiki All Rights Reserved.
    </div>
  </div>
</template>
<style lang="scss" scoped src="@/assets/sass/menu/main_menu.scss"></style>
<script>
import MenuContents from "@/components/Menu/MenuContents.vue";
export default {
  name: "MainMenu",
  components: {
    MenuContents,
  },
  props: {
    msg: String,
  },
  data: function () {
    return {
      menu_contents: [
        {
          imagesrc: "@/static",
          contents_title: "What's New?",
          link: "whats_new",
        },
        {
          imagesrc: "@/static",
          contents_title: "それシス",
          link: "blog",
        },
        {
          imagesrc: "@/static",
          contents_title: "Tools",
          link: "tools",
        },
        {
          imagesrc: "@/static",
          contents_title: "About Us",
          link: "about",
        },
        {
          imagesrc: "@/static",
          contents_title: "Contact",
          link: "contact",
        },
      ],
    };
  },
};
</script>

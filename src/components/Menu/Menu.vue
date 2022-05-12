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
          imagesrc: "/icons/TV.png",
          contents_title: "What's New?",
          link: "article",
        },
        {
          imagesrc: "/icons/Bin_Bon_Run.png",
          contents_title: "それシス",
          link: "article",
        },
        {
          imagesrc: "/icons/tool_modoki.png",
          contents_title: "Tools",
          link: "article",
        },
        {
          imagesrc: "/icons/Radio_Tekina_Something.png",
          contents_title: "About Us",
          link: "about",
        },
        {
          imagesrc: "/icons/Eating_boxchan.png",
          contents_title: "Contact",
          link: "contact",
        },
      ],
    };
  },
};
</script>

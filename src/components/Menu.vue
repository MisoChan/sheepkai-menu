<template>
  <div class="main_menu">
    <div id="menu_contents">
      <div v-for="item in menu_contents" :key="item.content_id">
        <MenuContents :item="item"></MenuContents>
      </div>
    </div>
    <div id="all_rights">© 2022 Nano-Shiki All Rights Reserved.</div>
  </div>
</template>
<style lang="scss" scoped src="@/assets/sass/main_menu.scss"></style>
<script>
import MenuContents from "@/components/MenuContents.vue";
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

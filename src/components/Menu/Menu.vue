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
<style
  lang="scss"
  scoped
  src="@/assets/sass/components/menu/main_menu.scss"
></style>
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
  methods: {
    getFunctionName(key) {
      return this.$translate("FunctionProperty", key)["name"];
    },
  },
  data: function () {
    return {
      menu_contents: [
        {
          imagesrc: "/icons/TV.webp",
          contents_title: this.getFunctionName("WHATS_NEW"),
          link: "article?function_cd=WHATS_NEW",
        },
        {
          imagesrc: "/icons/Bin_Bon_Run.webp",
          contents_title: this.getFunctionName("SORESYS"),
          link: "article?function_cd=SORESYS&page_no=1",
        },
        {
          imagesrc: "/icons/tool_modoki.webp",
          contents_title: this.getFunctionName("TOOLS"),
          link: "article?function_cd=OTHER&article_url=developping",
        },
        {
          imagesrc: "/icons/Radio_Tekina_Something.webp",
          contents_title: this.getFunctionName("ABOUT_US"),
          link: "article?function_cd=ABOUT_US",
        },
        {
          imagesrc: "/icons/POST.webp",
          contents_title: this.getFunctionName("CONTACT"),
          link: "contact",
        },
      ],
    };
  },
};
</script>

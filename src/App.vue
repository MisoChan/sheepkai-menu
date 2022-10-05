<template>
  <div id="bg_img">
    <router-view />
  </div>
</template>
<style lang="scss" scoped src="@/assets/sass/nomalize.scss"></style>
<script>
import { MetatagController } from "@/script/MetaTagController.js";

export default {
  mounted: function () {
    var routeInstance = this.$route;
    this.createTitleDesc(routeInstance);

    console.info(
      "%cデバッグお疲れ様でございます",
      "font-size: 24px;color: #FFF;background-color: #74978a"
    );
    console.info("%cここは一つ、お茶でもどうぞ → っ旦 ", "font-siSze: 18px;");
    console.info("-----By NanoShiki @launchpersimmon -----");
  },
  methods: {
    setMetaTag: function (property) {
      new MetatagController().setMetatag({
        title: property.name,
        description: property.description,
        pagetype: "website",
      });
    },
    createTitleDesc: function (routeInstance) {
      //titleを設定する
      const metadata = this.$translate(
        "FunctionProperty",
        routeInstance.meta.functionId
      );
      const setTitle = metadata.name;
      this.setMetaTag(metadata);
      this.$store.commit("setPageTitle", setTitle);
    },
  },
  watch: {
    $route(routeInstance) {
      this.createTitleDesc(routeInstance);
    },
  },
};
</script>

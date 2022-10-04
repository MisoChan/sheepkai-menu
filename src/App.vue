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

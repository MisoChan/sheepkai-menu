<template>
  <router-view />
</template>
<style lang="scss" scoped src="@/assets/sass/nomalize.scss"></style>
<script>
export default {
  mounted: function () {
    var routeInstance = this.$route;
    this.createTitleDesc(routeInstance);
  },
  methods: {
    createTitleDesc: function (routeInstance) {
      //titleを設定する
      const setTitle = this.$translate(
        "FunctionProperty",
        routeInstance.meta.functionId
      )["name"];
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

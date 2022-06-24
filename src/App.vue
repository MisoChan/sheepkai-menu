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
      const setTitle = routeInstance.meta.title + " | sheepkai.net";

      document.title = setTitle;
    },
  },
  watch: {
    $route(routeInstance) {
      this.createTitleDesc(routeInstance);
    },
  },
};
</script>

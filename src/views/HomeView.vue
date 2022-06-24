<template>
  <div id="bg_img">
    <div id="main">
      <MainMenu></MainMenu>
    </div>
  </div>
</template>

<script>
import MainMenu from "@/components/Menu/Menu.vue";
export default {
  components: {
    MainMenu,
  },
  mounted: function () {
    this.$store.commit("setPageTitle", "Menu");
  },
};
</script>

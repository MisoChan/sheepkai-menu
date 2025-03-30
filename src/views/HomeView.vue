<template>
  <div id="main">
    <div id="menu">
      <MainMenu></MainMenu>
    </div>
  </div>
</template>
<style lang="scss" src="@/assets/sass/views/home.scss"></style>
<script>
import MainMenu from "@/components/Menu/Menu.vue";
export default {
  components: {
    MainMenu,
  },
};
</script>

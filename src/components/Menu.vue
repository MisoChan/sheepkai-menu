<template>
  <div class="main_menu">
    <div class="contents"></div>
    <div id="all_rights">© 2022 N.Kishino. All Rights Reserved.</div>
  </div>
</template>
<style lang="scss" scoped src="@/assets/sass/main_menu.scss"></style>
<script>
export default {
  name: "MainMenu",
  props: {
    msg: String,
  },
};
</script>

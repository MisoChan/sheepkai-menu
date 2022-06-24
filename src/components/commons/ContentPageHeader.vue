<template>
  <header id="content_head">
    <div id="content_head_wrapper">
      <div id="header_site_title">羊飼いとお道具箱の部屋</div>
      <div id="content_head_title">{{ contentTitle }}</div>
      <div id="content_head_home_button">
        <router-link to="/">HOME</router-link>
      </div>
      <div></div>
    </div>
    <hr />
  </header>
</template>

<style
  lang="scss"
  scoped
  src="@/assets/sass/header/content_header.scss"
></style>

<script>
export default {
  data: function () {
    return {
      contentTitle: "LOADING....",
    };
  },
  mounted: function () {
    this.$store.watch(
      (state, getters) => getters.getPageTitle,
      (newValue) => {
        this.contentTitle = newValue;
      }
    );
  },
};
</script>

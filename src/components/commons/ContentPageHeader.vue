<template>
  <header id="content_head">
    <div id="content_head_wrapper">
      <div id="header_site_title">
        {{ this.$translate("Common", "sitename") }}
      </div>
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
    // Routerメタ情報を取得する。 → その他ページ用
    const routeInstance = this.$route;
    const routerMetadata = this.$translate(
      "FunctionProperty",
      routeInstance.meta.functionId
    );
    if (routerMetadata) {
      this.contentTitle =
        routerMetadata.name + ":" + routerMetadata.description;
    }

    // ストア情報（Vuex）が変更されていたときに走る：記事ページタイトル用
    this.$store.watch(
      (state, getters) => getters.getPageTitle,
      (newValue) => {
        this.contentTitle = newValue;
      }
    );
  },
};
</script>

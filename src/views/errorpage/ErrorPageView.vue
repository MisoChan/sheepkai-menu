<template>
  <div id="error_page_view">
    <div id="error_page_pigture_wrapper">
      <img :src="'/pictures/404Error.png'" />
    </div>
    <div id="error_page_description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: "",
    };
  },
};
</script>

<style></style>

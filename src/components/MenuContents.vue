<template>
  <div class="menu_icon_frame"><img @src="imagesrc" /></div>
  <div class="menu_contents_name">
    <a>{{ contents_title }}</a>
  </div>
</template>

<script>
export default {
  props: {
    imagesrc: {
      Type: String,
    },
    contents_title: {
      Type: String,
    },
  },
};
</script>

<template>
  <div class="popup_background">
    <div class="popup_window_wrapper">
      <div class="popup_window">
        <div class="popup_title"></div>
        <div class="popup_description"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    MessageID: {
      Type: String,
      Require: true,
    },
  },
};
</script>

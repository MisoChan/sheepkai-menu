<template>
  <div class="popup_overlay" v-if="ShowPopup">
    <div class="popup_window">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showPopup: {
      Type: Boolean,
      Require: false,
    },
  },
};
</script>

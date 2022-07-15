<template>
  <div id="popup_overray" :click="closeModal()" v-show="this.show">
    <slot></slot>
  </div>
</template>
<style
  lang="scss"
  scoped
  src="@/assets/sass/components/modal/modal.scss"
></style>
<script>
export default {
  emits: ["onClose"],
  props: {
    show: {
      Type: Boolean,
      Require: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("onClose");
    },
  },
};
</script>

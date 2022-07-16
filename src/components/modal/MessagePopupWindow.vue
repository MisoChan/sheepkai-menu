<template>
  <ModalPopup :show="this.showModal" :onClose="this.closeModal">
    <div class="message_window" @click.stop="">
      <img
        class="message_icon"
        :src="'/icons/popup/' + this.messageProperty.icon"
      />
      <div class="message_title">{{ this.messageProperty.title }}</div>
      <div class="message_description">
        {{ this.messageProperty.description }}
      </div>
    </div>
  </ModalPopup>
</template>
<style
  lang="scss"
  scoped
  src="@/assets/sass/components/modal/message_popup.scss"
></style>
<script>
import ModalPopup from "@/components/modal/ModalPopup.vue";
import ModalMessages from "@/json/PopupMessages.json";
export default {
  emits: ["onClose"],
  components: {
    ModalPopup,
  },
  props: {
    messageId: {
      Type: String,
      Required: true,
    },
  },
  data: function () {
    return {
      showModal: false,
      messageProperty: "",
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
      console.log("MODAL_CLOSE");
    },
    openModal(messageId) {
      // 今の所日本語しか対応してません！
      console.log("MODAL");
      const language = this.$store.getters.getLanguage;
      const message =
        ModalMessages[language] ??
        ModalMessages[process.env.VUE_APP_DEFAULT_LANGUAGE];
      this.messageProperty = message["POPUP"][messageId];
      this.showModal = true;
    },
  },
};
</script>
